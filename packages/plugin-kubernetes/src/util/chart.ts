import fs from "fs";
import os from "os";
import path from "path";
import yaml from "js-yaml";
import mkdirp from "mkdirp";
import { render } from "@senchou/helm";
import { useConfig } from "@leverage/core";
import { HelmMeta, KubernetesConfig } from "../config";
import { ChartTemplateComponent } from "../components/template";

export const renderChart = (
    config: NonNullable<KubernetesConfig["kubernetes"]["chart"]>,
    values: object = {},
    templates: Array<ChartTemplateComponent> = []
) => {
    const tmp = fs.mkdtempSync(
        path.join(os.tmpdir(), "leverage-kubernetes-chart-")
    );

    mkdirp.sync(path.resolve(tmp, "crd"));
    mkdirp.sync(path.resolve(tmp, "templates"));
    mkdirp.sync(path.resolve(tmp, "tests"));

    fs.writeFileSync(path.resolve(tmp, ".helmignore"), "tests/");

    const chartYAML = yaml.dump({
        apiVersion: "v2",
        name: config.name,
        ...config.meta,
    });

    const valuesYAML = yaml.dump(config.values ?? {});

    fs.writeFileSync(path.resolve(tmp, "Chart.yaml"), chartYAML);
    fs.writeFileSync(path.resolve(tmp, "values.yaml"), valuesYAML);

    for (const chartTemplate of templates) {
        const chartTemplateConfig = useConfig<"component", "kubernetes">(
            chartTemplate
        ).kubernetes!.template!;

        const tmpl = chartTemplate.template();

        const manifest = render(tmpl);

        fs.writeFileSync(
            path.resolve(
                tmp,
                `templates/${chartTemplateConfig.name}.${
                    chartTemplateConfig.helper ? "tpl" : "yaml"
                }`
            ),
            manifest
        );
    }

    return tmp;
};
