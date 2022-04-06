import os from "os";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { execSync } from "child_process";
import mkdirp from "mkdirp";
import {
    HOOKS_DATA,
    InitializedUnit,
    Plugin,
    Ref,
    useConfig,
    useEvent,
    useInstallEffect,
    useKeyRef,
} from "@leverage/core";
import { ChartComponent, isChartComponent } from "./components/chart";
import { HelmComponent, isHelmComponent } from "./components/helm";
import {
    isKubernetesComponent,
    KubernetesComponent,
} from "./components/kubernetes";
import {
    ChartTemplateComponent,
    isChartTemplateComponent,
} from "./components/template";
import { KubernetesConfig } from "./config";
import senchou from "@senchou/core";
import { TemplatedValue } from "@senchou/helm";
import { isPatchComponent, PatchComponent } from ".";
import { renderChart } from "./util/chart";

export interface KubernetesPlugin extends Plugin<"kubernetes"> {}

export const UNKNOWN_NAME = Symbol.for("unknown-name");

type HelmComponentMap = Map<string, HelmComponent>;
type ChartComponentMap = Map<string, ChartComponent>;
type TemplateComponentMap = Map<string, Array<ChartTemplateComponent>>;
type KubernetesComponentMap = Map<
    string | typeof UNKNOWN_NAME,
    Array<KubernetesComponent>
>;
type PatchesComponentArray = Array<PatchComponent>;

export type KubernetesRenderOptions =
    | {
          type: "kubernetes";
          name?: string;
          selector?: (
              config: NonNullable<KubernetesConfig["kubernetes"]["kubernetes"]>
          ) => boolean;
          callback?: (resources: Array<object>) => void;
      }
    | {
          type: "helm";
          name?: string;
          selector?: (
              config: NonNullable<KubernetesConfig["kubernetes"]["helm"]>
          ) => boolean;
          callback?: (
              resources: Array<{
                  name: string;
                  manifests: Array<unknown>;
              }>
          ) => void;
      }
    | {
          type: "chart";
          name?: string;
          selector?: (
              config: NonNullable<
                  | KubernetesConfig["kubernetes"]["chart"]
                  | KubernetesConfig["kubernetes"]["template"]
              >
          ) => boolean;
          callback?: (
              outputs: Array<{
                  name: string;
                  path: string;
              }>
          ) => void;
      }
    | {
          type: "all";
          name?: string;
          selector?: (
              config: NonNullable<
                  | KubernetesConfig["kubernetes"]["kubernetes"]
                  | KubernetesConfig["kubernetes"]["helm"]
              >
          ) => boolean;
          callback?: (resources: {
              kubernetes: Array<object>;
              helm: Array<{
                  name: string;
                  manifests: Array<unknown>;
              }>;
              charts: Array<{
                  name: string;
                  path: string;
              }>;
          }) => void;
      };

export const init: KubernetesPlugin["init"] = () => {
    useConfig({
        is: "plugin",
        type: "kubernetes",
    });

    const helms = useKeyRef<HelmComponentMap>("helms", new Map());
    const charts = useKeyRef<ChartComponentMap>("charts", new Map());
    const templates = useKeyRef<TemplateComponentMap>("templates", new Map());
    const kubernetes = useKeyRef<KubernetesComponentMap>(
        "kubernetes",
        new Map()
    );
    const patches = useKeyRef<PatchesComponentArray>("patches", []);

    useEvent("kubernetes:render", (options) => {
        const matchingKubernetesComponents = [];
        const matchingHelmComponents = [];
        const matchingChartComponents = [];

        const tmpDirectories = [];

        if (options.type === "kubernetes" || options.type === "all") {
            for (const [name, components] of kubernetes.current.entries()) {
                if (options.name === undefined || options.name === name) {
                    for (const component of components) {
                        // @FIXME(jakehamilton): Types seem to need to change
                        // on @leverage/core. Accessing a component's config
                        // doesn't appear to work correctly.
                        const config = useConfig<"component", "kubernetes">(
                            component
                        ).kubernetes!.kubernetes!;

                        if (
                            options.selector === undefined ||
                            options.selector(config)
                        ) {
                            matchingKubernetesComponents.push(component);
                        }
                    }
                }
            }
        }

        if (options.type === "helm" || options.type === "all") {
            for (const [name, component] of helms.current.entries()) {
                if (options.name === undefined || options.name === name) {
                    const config = useConfig<"component", "kubernetes">(
                        component
                    ).kubernetes!.helm!;

                    if (
                        options.selector === undefined ||
                        options.selector(config)
                    ) {
                        matchingHelmComponents.push(component);
                    }
                }
            }
        }

        if (options.type === "chart" || options.type === "all") {
            for (const [name, component] of charts.current.entries()) {
                if (options.name === undefined || options.name === name) {
                    const config = useConfig<"component", "kubernetes">(
                        component
                    ).kubernetes!.chart!;

                    if (
                        options.selector === undefined ||
                        options.selector(config)
                    ) {
                        matchingChartComponents.push(component);
                    }
                }
            }
        }

        const kubernetesManifests: Array<object> = [];

        for (const component of matchingKubernetesComponents) {
            const manifest = component.render();
            for (const patch of patches.current) {
                patch.patch?.(manifest);
            }
            kubernetesManifests.push(manifest);
        }

        const chartManifests: Array<{
            name: string;
            values: object;
            templates: Array<TemplatedValue<object>>;
        }> = [];

        for (const component of matchingChartComponents) {
            const config = useConfig<"component", "kubernetes">(component)
                .kubernetes!.chart!;

            const chartTemplateComponents = templates.current.get(config.name);

            const chartTemplates: Array<TemplatedValue<object>> = [];

            if (chartTemplateComponents) {
                for (const chartTemplate of chartTemplateComponents) {
                    chartTemplates.push(chartTemplate.template());
                }
            }

            chartManifests.push({
                name: config.name,
                values: component.values?.() ?? {},
                templates: chartTemplates,
            });
        }

        const helmManifestPromises: Array<Promise<{
            name: string;
            manifests: Array<unknown>;
        }>> = [];

        for (const component of matchingHelmComponents) {
            const config = useConfig<"component", "kubernetes">(component)
                .kubernetes!.helm!;

            let chartTarget = config.chart;

            if (charts.current.has(config.chart)) {
                const chart = charts.current.get(config.chart)!;
                const chartConfig = useConfig<"component", "kubernetes">(chart)
                    .kubernetes!.chart!;

                const tmp = renderChart(
                    chartConfig,
                    templates.current.get(config.chart)
                );

                // We'll write all chart files into the tmp directory. So
                // that is where Helm should look to render the chart from.
                chartTarget = tmp;

                tmpDirectories.push(tmp);
            } else if (config.repository !== undefined) {
                execSync(
                    `helm repo add ${config.repository.name} ${config.repository.url}`
                );
            }

            const promise = senchou.import
                .helm({
                    name: config.name,
                    chart: chartTarget,
                    values: component.values?.(),
                    args: config.args,
                })
                .then((manifests) => ({
                    name: config.name,
                    manifests,
                }));

            helmManifestPromises.push(promise);
        }

        const chartOutputs: Array<{
            name: string;
            path: string;
        }> = [];

        for (const chart of matchingChartComponents) {
            const chartConfig = useConfig<"component", "kubernetes">(chart)
                .kubernetes!.chart!;

            const tmp = renderChart(
                chartConfig,
                templates.current.get(chartConfig.name)
            );

            chartOutputs.push({
                name: chartConfig.name,
                path: tmp,
            });
        }

        switch (options.type) {
            case "kubernetes": {
                options.callback?.(kubernetesManifests);
                break;
            }
            case "helm": {
                Promise.all(helmManifestPromises).then((outputs) => {
                    options.callback?.(outputs);
                });
                break;
            }
            case "chart": {
                options.callback?.(chartOutputs);
                break;
            }
            case "all": {
                Promise.all(helmManifestPromises).then((outputs) => {
                    options.callback?.({
                        kubernetes: kubernetesManifests,
                        helm: outputs,
                        charts: chartOutputs,
                    });
                });
            }
        }
    });
};

export const install: KubernetesPlugin["install"] = (unit) => {
    const config = useConfig(unit);

    const helms = useKeyRef<HelmComponentMap>("helms");
    const charts = useKeyRef<ChartComponentMap>("charts");
    const templates = useKeyRef<TemplateComponentMap>("templates");
    const kubernetes = useKeyRef<KubernetesComponentMap>("kubernetes");
    const patches = useKeyRef<PatchesComponentArray>("patches");

    if (isHelmComponent(unit)) {
        const name = config.kubernetes!.helm!.name;

        if (helms.current.has(name)) {
            throw new Error(
                `Helm component already exists with name "${name}".`
            );
        }

        helms.current.set(name, unit);
    } else if (isChartComponent(unit)) {
        const name = config.kubernetes!.chart!.name;

        if (charts.current.has(name)) {
            throw new Error(`A chart with the name "${name}" already exists.`);
        }

        charts.current.set(name, unit);
    } else if (isChartTemplateComponent(unit)) {
        const name = config.kubernetes!.template!.chart;

        if (!templates.current.has(name)) {
            templates.current.set(name, []);
        }

        const items = templates.current.get(name)!;

        items.push(unit);
    } else if (isKubernetesComponent(unit)) {
        const name = config.kubernetes!.kubernetes!.name ?? UNKNOWN_NAME;

        if (!kubernetes.current.has(name)) {
            kubernetes.current.set(name, []);
        }

        const manifests = kubernetes.current.get(name);

        manifests?.push(unit);
    } else if (isPatchComponent(unit)) {
        patches.current.push(unit);
    }
};

export const uninstall: KubernetesPlugin["uninstall"] = () => {};

const plugin: KubernetesPlugin = {
    init,
    install,
    uninstall,
};

export default plugin;
