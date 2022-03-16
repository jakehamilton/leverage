import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { Manager } from "@leverage/core";
import kubernetes, {
    ChartComponent,
    HelmComponent,
    KubernetesComponent,
    KubernetesRenderOptions,
    useChart,
    useChartTemplate,
    useHelm,
    useKubernetes,
} from "..";
import { isPod, Pod } from "./util/k8s";
import { ChartTemplateComponent } from "../components/template";
import { template } from "@senchou/helm";

describe("PluginKubernetes", () => {
    let manager: Manager;

    beforeEach(() => {
        manager = new Manager();
    });

    afterEach(() => {
        manager.reset();
    });

    it("should work", (done) => {
        manager.add(kubernetes);

        const unit: KubernetesComponent = {
            init: () => {
                useKubernetes({
                    name: "my-pod",
                });
            },
            render: () => {
                const pod = Pod({
                    spec: {
                        containers: [
                            {
                                name: "my-container",
                            },
                        ],
                    },
                });

                return pod;
            },
        };

        manager.add(unit);

        manager.emit("kubernetes:render", {
            type: "kubernetes",
            name: "my-pod",
            callback: (resources) => {
                expect(resources).toMatchInlineSnapshot(`
                  [
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": undefined,
                      "spec": {
                        "activeDeadlineSeconds": undefined,
                        "affinity": undefined,
                        "automountServiceAccountToken": undefined,
                        "containers": [
                          {
                            "args": undefined,
                            "command": undefined,
                            "env": undefined,
                            "envFrom": undefined,
                            "image": undefined,
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "my-container",
                            "ports": undefined,
                            "readinessProbe": undefined,
                            "resources": undefined,
                            "securityContext": undefined,
                            "startupProbe": undefined,
                            "stdin": undefined,
                            "stdinOnce": undefined,
                            "terminationMessagePath": undefined,
                            "terminationMessagePolicy": undefined,
                            "tty": undefined,
                            "volumeDevices": undefined,
                            "volumeMounts": undefined,
                            "workingDir": undefined,
                          },
                        ],
                        "dnsConfig": undefined,
                        "dnsPolicy": undefined,
                        "enableServiceLinks": undefined,
                        "ephemeralContainers": undefined,
                        "hostAliases": undefined,
                        "hostIPC": undefined,
                        "hostNetwork": undefined,
                        "hostPID": undefined,
                        "hostname": undefined,
                        "imagePullSecrets": undefined,
                        "initContainers": undefined,
                        "nodeName": undefined,
                        "nodeSelector": undefined,
                        "overhead": undefined,
                        "preemptionPolicy": undefined,
                        "priority": undefined,
                        "priorityClassName": undefined,
                        "readinessGates": undefined,
                        "restartPolicy": undefined,
                        "runtimeClassName": undefined,
                        "schedulerName": undefined,
                        "securityContext": undefined,
                        "serviceAccount": undefined,
                        "serviceAccountName": undefined,
                        "setHostnameAsFQDN": undefined,
                        "shareProcessNamespace": undefined,
                        "subdomain": undefined,
                        "terminationGracePeriodSeconds": undefined,
                        "tolerations": undefined,
                        "topologySpreadConstraints": undefined,
                        "volumes": undefined,
                      },
                    },
                  ]
                `);

                done();
            },
        });
    });

    it("supports charts", (done) => {
        manager.add(kubernetes);

        const chart: ChartComponent = {
            init: () => {
                useChart({
                    name: "mychart",
                    meta: {
                        version: "1.0.0",
                    },
                    values: {
                        str: "a string",
                        num: 42,
                        bool: true,
                        obj: {
                            yep: true,
                        },
                        array: [{ nestedArray: [true] }],
                        name: "default-name",
                        labels: {},
                        image: "nginx",
                    },
                });
            },
        };

        const chartTemplate: ChartTemplateComponent = {
            init: () => {
                useChartTemplate({
                    name: "pod",
                    chart: "mychart",
                });
            },
            template: () => {
                return template(Pod, {
                    metadata: {
                        name: template.string(".Values.name"),
                        labels: template.object<Record<string, string>>(
                            ".Values.labels",
                            {
                                "x-generated-by": "senchou",
                            }
                        ),
                    },
                    spec: {
                        containers: [
                            {
                                name: "{{ .Values.name }}-container",
                                image: template.string(".Values.image"),
                            },
                        ],
                    },
                });
            },
        };

        manager.add(chart, chartTemplate);

        manager.emit("kubernetes:render", {
            type: "chart",
            name: "mychart",
            callback: (resources) => {
                expect(resources.length).toBe(1);
                expect(resources[0]?.name).toBe("mychart");
                expect(typeof resources[0]?.path).toBe("string");

                done();
            },
        });
    });

    it("supports local charts", (done) => {
        manager.add(kubernetes);

        const helm: HelmComponent = {
            init: () => {
                useHelm({
                    name: "myrelease",
                    chart: "mychart",
                });
            },
            values: () => {
                return {
                    name: "custom-name",
                    image: "custom-image",
                    labels: {
                        "my-custom-label": "hello world",
                    },
                };
            },
        };

        const chart: ChartComponent = {
            init: () => {
                useChart({
                    name: "mychart",
                    meta: {
                        version: "1.0.0",
                    },
                    values: {
                        str: "a string",
                        num: 42,
                        bool: true,
                        obj: {
                            yep: true,
                        },
                        array: [{ nestedArray: [true] }],
                        name: "default-name",
                        labels: {},
                        image: "nginx",
                    },
                });
            },
        };

        const chartTemplate: ChartTemplateComponent = {
            init: () => {
                useChartTemplate({
                    name: "pod",
                    chart: "mychart",
                });
            },
            template: () => {
                return template(Pod, {
                    metadata: {
                        name: template.string(".Values.name"),
                        labels: template.object<Record<string, string>>(
                            ".Values.labels",
                            {
                                "x-generated-by": "senchou",
                            }
                        ),
                    },
                    spec: {
                        containers: [
                            {
                                name: "{{ .Values.name }}-container",
                                image: template.string(".Values.image"),
                            },
                        ],
                    },
                });
            },
        };

        manager.add(helm, chart, chartTemplate);

        manager.emit("kubernetes:render", {
            type: "helm",
            name: "myrelease",
            callback: (resources) => {
                expect(resources).toMatchInlineSnapshot(`
                  [
                    {
                      "manifests": [
                        {
                          "apiVersion": "v1",
                          "kind": "Pod",
                          "metadata": {
                            "labels": {
                              "my-custom-label": "hello world",
                              "x-generated-by": "senchou",
                            },
                            "name": "custom-name",
                          },
                          "spec": {
                            "containers": [
                              {
                                "image": "custom-image",
                                "name": "custom-name-container",
                              },
                            ],
                          },
                        },
                      ],
                      "name": "myrelease",
                    },
                  ]
                `);

                done();
            },
        });
    });

    it("supports all at once", (done) => {
        manager.add(kubernetes);

        const unit: KubernetesComponent = {
            init: () => {
                useKubernetes({
                    name: "my-pod",
                });
            },
            render: () => {
                const pod = Pod({
                    spec: {
                        containers: [
                            {
                                name: "my-container",
                            },
                        ],
                    },
                });

                return pod;
            },
        };

        const helm: HelmComponent = {
            init: () => {
                useHelm({
                    name: "myrelease",
                    chart: "mychart",
                });
            },
            values: () => {
                return {
                    name: "custom-name",
                    image: "custom-image",
                    labels: {
                        "my-custom-label": "hello world",
                    },
                };
            },
        };

        const chart: ChartComponent = {
            init: () => {
                useChart({
                    name: "mychart",
                    meta: {
                        version: "1.0.0",
                    },
                    values: {
                        str: "a string",
                        num: 42,
                        bool: true,
                        obj: {
                            yep: true,
                        },
                        array: [{ nestedArray: [true] }],
                        name: "default-name",
                        labels: {},
                        image: "nginx",
                    },
                });
            },
        };

        const chartTemplate: ChartTemplateComponent = {
            init: () => {
                useChartTemplate({
                    name: "pod",
                    chart: "mychart",
                });
            },
            template: () => {
                return template(Pod, {
                    metadata: {
                        name: template.string(".Values.name"),
                        labels: template.object<Record<string, string>>(
                            ".Values.labels",
                            {
                                "x-generated-by": "senchou",
                            }
                        ),
                    },
                    spec: {
                        containers: [
                            {
                                name: "{{ .Values.name }}-container",
                                image: template.string(".Values.image"),
                            },
                        ],
                    },
                });
            },
        };

        manager.add(unit, helm, chart, chartTemplate);

        manager.emit("kubernetes:render", {
            type: "all",
            callback: (resources) => {
                expect(resources.helm).toMatchInlineSnapshot(`
                  [
                    {
                      "manifests": [
                        {
                          "apiVersion": "v1",
                          "kind": "Pod",
                          "metadata": {
                            "labels": {
                              "my-custom-label": "hello world",
                              "x-generated-by": "senchou",
                            },
                            "name": "custom-name",
                          },
                          "spec": {
                            "containers": [
                              {
                                "image": "custom-image",
                                "name": "custom-name-container",
                              },
                            ],
                          },
                        },
                      ],
                      "name": "myrelease",
                    },
                  ]
                `);

                expect(resources.kubernetes).toMatchInlineSnapshot(`
                  [
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": undefined,
                      "spec": {
                        "activeDeadlineSeconds": undefined,
                        "affinity": undefined,
                        "automountServiceAccountToken": undefined,
                        "containers": [
                          {
                            "args": undefined,
                            "command": undefined,
                            "env": undefined,
                            "envFrom": undefined,
                            "image": undefined,
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "my-container",
                            "ports": undefined,
                            "readinessProbe": undefined,
                            "resources": undefined,
                            "securityContext": undefined,
                            "startupProbe": undefined,
                            "stdin": undefined,
                            "stdinOnce": undefined,
                            "terminationMessagePath": undefined,
                            "terminationMessagePolicy": undefined,
                            "tty": undefined,
                            "volumeDevices": undefined,
                            "volumeMounts": undefined,
                            "workingDir": undefined,
                          },
                        ],
                        "dnsConfig": undefined,
                        "dnsPolicy": undefined,
                        "enableServiceLinks": undefined,
                        "ephemeralContainers": undefined,
                        "hostAliases": undefined,
                        "hostIPC": undefined,
                        "hostNetwork": undefined,
                        "hostPID": undefined,
                        "hostname": undefined,
                        "imagePullSecrets": undefined,
                        "initContainers": undefined,
                        "nodeName": undefined,
                        "nodeSelector": undefined,
                        "overhead": undefined,
                        "preemptionPolicy": undefined,
                        "priority": undefined,
                        "priorityClassName": undefined,
                        "readinessGates": undefined,
                        "restartPolicy": undefined,
                        "runtimeClassName": undefined,
                        "schedulerName": undefined,
                        "securityContext": undefined,
                        "serviceAccount": undefined,
                        "serviceAccountName": undefined,
                        "setHostnameAsFQDN": undefined,
                        "shareProcessNamespace": undefined,
                        "subdomain": undefined,
                        "terminationGracePeriodSeconds": undefined,
                        "tolerations": undefined,
                        "topologySpreadConstraints": undefined,
                        "volumes": undefined,
                      },
                    },
                  ]
                `);

                expect(resources.charts.length).toBe(1);
                expect(resources.charts[0]?.name).toBe("mychart");
                expect(typeof resources.charts[0]?.path).toBe("string");

                done();
            },
        });
    });
});
