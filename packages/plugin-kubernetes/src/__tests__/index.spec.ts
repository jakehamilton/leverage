import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { Manager } from "@leverage/core";
import kubernetes, {
    ChartComponent,
    HelmComponent,
    KubernetesComponent,
    KubernetesRenderOptions,
    PatchComponent,
    render,
    useChart,
    useChartTemplate,
    useHelm,
    useKubernetes,
    usePatch,
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

        render(
            {
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
            },
            manager
        );
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

    it("supports helm", (done) => {
        const helm: HelmComponent = {
            init: () => {
                useHelm({
                    name: "my-traefik",
                    chart: "traefik/traefik",
                    repository: {
                        name: "traefik",
                        url: "https://helm.traefik.io/traefik",
                    },
                });
            },
        };

        manager.add(kubernetes, helm);

        manager.emit("kubernetes:render", {
            type: "helm",
            callback: (resources) => {
                expect(resources[0]).toBeTruthy();
                expect(resources[0].name).toBe("my-traefik");
                expect(resources[0].manifests).toMatchInlineSnapshot(`
                  [
                    {
                      "apiVersion": "v1",
                      "kind": "ServiceAccount",
                      "metadata": {
                        "annotations": null,
                        "labels": {
                          "app.kubernetes.io/instance": "my-traefik",
                          "app.kubernetes.io/managed-by": "Helm",
                          "app.kubernetes.io/name": "traefik",
                          "helm.sh/chart": "traefik-10.11.1",
                        },
                        "name": "my-traefik",
                      },
                    },
                    {
                      "apiVersion": "rbac.authorization.k8s.io/v1",
                      "kind": "ClusterRole",
                      "metadata": {
                        "labels": {
                          "app.kubernetes.io/instance": "my-traefik",
                          "app.kubernetes.io/managed-by": "Helm",
                          "app.kubernetes.io/name": "traefik",
                          "helm.sh/chart": "traefik-10.11.1",
                        },
                        "name": "my-traefik",
                      },
                      "rules": [
                        {
                          "apiGroups": [
                            "",
                          ],
                          "resources": [
                            "services",
                            "endpoints",
                            "secrets",
                          ],
                          "verbs": [
                            "get",
                            "list",
                            "watch",
                          ],
                        },
                        {
                          "apiGroups": [
                            "extensions",
                            "networking.k8s.io",
                          ],
                          "resources": [
                            "ingresses",
                            "ingressclasses",
                          ],
                          "verbs": [
                            "get",
                            "list",
                            "watch",
                          ],
                        },
                        {
                          "apiGroups": [
                            "extensions",
                            "networking.k8s.io",
                          ],
                          "resources": [
                            "ingresses/status",
                          ],
                          "verbs": [
                            "update",
                          ],
                        },
                        {
                          "apiGroups": [
                            "traefik.containo.us",
                          ],
                          "resources": [
                            "ingressroutes",
                            "ingressroutetcps",
                            "ingressrouteudps",
                            "middlewares",
                            "middlewaretcps",
                            "tlsoptions",
                            "tlsstores",
                            "traefikservices",
                            "serverstransports",
                          ],
                          "verbs": [
                            "get",
                            "list",
                            "watch",
                          ],
                        },
                      ],
                    },
                    {
                      "apiVersion": "rbac.authorization.k8s.io/v1",
                      "kind": "ClusterRoleBinding",
                      "metadata": {
                        "labels": {
                          "app.kubernetes.io/instance": "my-traefik",
                          "app.kubernetes.io/managed-by": "Helm",
                          "app.kubernetes.io/name": "traefik",
                          "helm.sh/chart": "traefik-10.11.1",
                        },
                        "name": "my-traefik",
                      },
                      "roleRef": {
                        "apiGroup": "rbac.authorization.k8s.io",
                        "kind": "ClusterRole",
                        "name": "my-traefik",
                      },
                      "subjects": [
                        {
                          "kind": "ServiceAccount",
                          "name": "my-traefik",
                          "namespace": "default",
                        },
                      ],
                    },
                    {
                      "apiVersion": "apps/v1",
                      "kind": "Deployment",
                      "metadata": {
                        "annotations": null,
                        "labels": {
                          "app.kubernetes.io/instance": "my-traefik",
                          "app.kubernetes.io/managed-by": "Helm",
                          "app.kubernetes.io/name": "traefik",
                          "helm.sh/chart": "traefik-10.11.1",
                        },
                        "name": "my-traefik",
                      },
                      "spec": {
                        "minReadySeconds": 0,
                        "replicas": 1,
                        "selector": {
                          "matchLabels": {
                            "app.kubernetes.io/instance": "my-traefik",
                            "app.kubernetes.io/name": "traefik",
                          },
                        },
                        "strategy": {
                          "rollingUpdate": {
                            "maxSurge": 1,
                            "maxUnavailable": 1,
                          },
                          "type": "RollingUpdate",
                        },
                        "template": {
                          "metadata": {
                            "annotations": {
                              "prometheus.io/path": "/metrics",
                              "prometheus.io/port": "9100",
                              "prometheus.io/scrape": "true",
                            },
                            "labels": {
                              "app.kubernetes.io/instance": "my-traefik",
                              "app.kubernetes.io/managed-by": "Helm",
                              "app.kubernetes.io/name": "traefik",
                              "helm.sh/chart": "traefik-10.11.1",
                            },
                          },
                          "spec": {
                            "containers": [
                              {
                                "args": [
                                  "--global.checknewversion",
                                  "--global.sendanonymoususage",
                                  "--entryPoints.metrics.address=:9100/tcp",
                                  "--entryPoints.traefik.address=:9000/tcp",
                                  "--entryPoints.web.address=:8000/tcp",
                                  "--entryPoints.websecure.address=:8443/tcp",
                                  "--api.dashboard=true",
                                  "--ping=true",
                                  "--metrics.prometheus=true",
                                  "--metrics.prometheus.entrypoint=metrics",
                                  "--providers.kubernetescrd",
                                  "--providers.kubernetesingress",
                                ],
                                "image": "traefik:2.6.0",
                                "imagePullPolicy": "IfNotPresent",
                                "livenessProbe": {
                                  "failureThreshold": 3,
                                  "httpGet": {
                                    "path": "/ping",
                                    "port": 9000,
                                  },
                                  "initialDelaySeconds": 10,
                                  "periodSeconds": 10,
                                  "successThreshold": 1,
                                  "timeoutSeconds": 2,
                                },
                                "name": "my-traefik",
                                "ports": [
                                  {
                                    "containerPort": 9100,
                                    "name": "metrics",
                                    "protocol": "TCP",
                                  },
                                  {
                                    "containerPort": 9000,
                                    "name": "traefik",
                                    "protocol": "TCP",
                                  },
                                  {
                                    "containerPort": 8000,
                                    "name": "web",
                                    "protocol": "TCP",
                                  },
                                  {
                                    "containerPort": 8443,
                                    "name": "websecure",
                                    "protocol": "TCP",
                                  },
                                ],
                                "readinessProbe": {
                                  "failureThreshold": 1,
                                  "httpGet": {
                                    "path": "/ping",
                                    "port": 9000,
                                  },
                                  "initialDelaySeconds": 10,
                                  "periodSeconds": 10,
                                  "successThreshold": 1,
                                  "timeoutSeconds": 2,
                                },
                                "resources": null,
                                "securityContext": {
                                  "capabilities": {
                                    "drop": [
                                      "ALL",
                                    ],
                                  },
                                  "readOnlyRootFilesystem": true,
                                  "runAsGroup": 65532,
                                  "runAsNonRoot": true,
                                  "runAsUser": 65532,
                                },
                                "volumeMounts": [
                                  {
                                    "mountPath": "/data",
                                    "name": "data",
                                  },
                                  {
                                    "mountPath": "/tmp",
                                    "name": "tmp",
                                  },
                                ],
                              },
                            ],
                            "hostNetwork": false,
                            "securityContext": {
                              "fsGroup": 65532,
                            },
                            "serviceAccountName": "my-traefik",
                            "terminationGracePeriodSeconds": 60,
                            "volumes": [
                              {
                                "emptyDir": {},
                                "name": "data",
                              },
                              {
                                "emptyDir": {},
                                "name": "tmp",
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      "apiVersion": "v1",
                      "items": [
                        {
                          "apiVersion": "v1",
                          "kind": "Service",
                          "metadata": {
                            "annotations": null,
                            "labels": {
                              "app.kubernetes.io/instance": "my-traefik",
                              "app.kubernetes.io/managed-by": "Helm",
                              "app.kubernetes.io/name": "traefik",
                              "helm.sh/chart": "traefik-10.11.1",
                            },
                            "name": "my-traefik",
                          },
                          "spec": {
                            "ports": [
                              {
                                "name": "web",
                                "port": 80,
                                "protocol": "TCP",
                                "targetPort": "web",
                              },
                              {
                                "name": "websecure",
                                "port": 443,
                                "protocol": "TCP",
                                "targetPort": "websecure",
                              },
                            ],
                            "selector": {
                              "app.kubernetes.io/instance": "my-traefik",
                              "app.kubernetes.io/name": "traefik",
                            },
                            "type": "LoadBalancer",
                          },
                        },
                      ],
                      "kind": "List",
                      "metadata": {
                        "name": "my-traefik",
                      },
                    },
                    {
                      "apiVersion": "traefik.containo.us/v1alpha1",
                      "kind": "IngressRoute",
                      "metadata": {
                        "annotations": {
                          "helm.sh/hook": "post-install,post-upgrade",
                        },
                        "labels": {
                          "app.kubernetes.io/instance": "my-traefik",
                          "app.kubernetes.io/managed-by": "Helm",
                          "app.kubernetes.io/name": "traefik",
                          "helm.sh/chart": "traefik-10.11.1",
                        },
                        "name": "my-traefik-dashboard",
                      },
                      "spec": {
                        "entryPoints": [
                          "traefik",
                        ],
                        "routes": [
                          {
                            "kind": "Rule",
                            "match": "PathPrefix(\`/dashboard\`) || PathPrefix(\`/api\`)",
                            "services": [
                              {
                                "kind": "TraefikService",
                                "name": "api@internal",
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ]
                `);
                done();
            },
        });
    });

    it("supports patching resources", (done) => {
        const units = Array.from({ length: 5 }, (_, i) => {
            const unit: KubernetesComponent = {
                init: () => {
                    useKubernetes({
                        name: `pod-${i}`,
                    });
                },
                render: () => {
                    return Pod({
                        metadata: {
                            name: `pod-${i}`,
                        },
                        spec: {
                            containers: [
                                {
                                    name: `pod-${i}-container`,
                                    image: `pod-${i}-image`,
                                },
                            ],
                        },
                    });
                },
            };

            return unit;
        });

        const patch: PatchComponent = {
            init: () => {
                usePatch({
                    name: "my-patch",
                });
            },
            patch: (resource) => {
                if (isPod(resource)) {
                    resource.metadata.labels = {
                        ...resource.metadata.labels,
                        "x-patched-by": "leverage",
                    };
                }
            },
        };

        manager.add(kubernetes, ...units, patch);

        manager.emit("kubernetes:render", {
            type: "kubernetes",
            callback: (resources) => {
                expect(resources).toMatchInlineSnapshot(`
                  [
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": {
                        "annotations": undefined,
                        "clusterName": undefined,
                        "creationTimestamp": undefined,
                        "deletionGracePeriodSeconds": undefined,
                        "deletionTimestamp": undefined,
                        "finalizers": undefined,
                        "generateName": undefined,
                        "generation": undefined,
                        "labels": {
                          "x-patched-by": "leverage",
                        },
                        "managedFields": undefined,
                        "name": "pod-0",
                        "namespace": undefined,
                        "ownerReferences": undefined,
                        "resourceVersion": undefined,
                        "selfLink": undefined,
                        "uid": undefined,
                      },
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
                            "image": "pod-0-image",
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "pod-0-container",
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
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": {
                        "annotations": undefined,
                        "clusterName": undefined,
                        "creationTimestamp": undefined,
                        "deletionGracePeriodSeconds": undefined,
                        "deletionTimestamp": undefined,
                        "finalizers": undefined,
                        "generateName": undefined,
                        "generation": undefined,
                        "labels": {
                          "x-patched-by": "leverage",
                        },
                        "managedFields": undefined,
                        "name": "pod-1",
                        "namespace": undefined,
                        "ownerReferences": undefined,
                        "resourceVersion": undefined,
                        "selfLink": undefined,
                        "uid": undefined,
                      },
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
                            "image": "pod-1-image",
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "pod-1-container",
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
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": {
                        "annotations": undefined,
                        "clusterName": undefined,
                        "creationTimestamp": undefined,
                        "deletionGracePeriodSeconds": undefined,
                        "deletionTimestamp": undefined,
                        "finalizers": undefined,
                        "generateName": undefined,
                        "generation": undefined,
                        "labels": {
                          "x-patched-by": "leverage",
                        },
                        "managedFields": undefined,
                        "name": "pod-2",
                        "namespace": undefined,
                        "ownerReferences": undefined,
                        "resourceVersion": undefined,
                        "selfLink": undefined,
                        "uid": undefined,
                      },
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
                            "image": "pod-2-image",
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "pod-2-container",
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
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": {
                        "annotations": undefined,
                        "clusterName": undefined,
                        "creationTimestamp": undefined,
                        "deletionGracePeriodSeconds": undefined,
                        "deletionTimestamp": undefined,
                        "finalizers": undefined,
                        "generateName": undefined,
                        "generation": undefined,
                        "labels": {
                          "x-patched-by": "leverage",
                        },
                        "managedFields": undefined,
                        "name": "pod-3",
                        "namespace": undefined,
                        "ownerReferences": undefined,
                        "resourceVersion": undefined,
                        "selfLink": undefined,
                        "uid": undefined,
                      },
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
                            "image": "pod-3-image",
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "pod-3-container",
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
                    {
                      "apiVersion": "v1",
                      "kind": "Pod",
                      "metadata": {
                        "annotations": undefined,
                        "clusterName": undefined,
                        "creationTimestamp": undefined,
                        "deletionGracePeriodSeconds": undefined,
                        "deletionTimestamp": undefined,
                        "finalizers": undefined,
                        "generateName": undefined,
                        "generation": undefined,
                        "labels": {
                          "x-patched-by": "leverage",
                        },
                        "managedFields": undefined,
                        "name": "pod-4",
                        "namespace": undefined,
                        "ownerReferences": undefined,
                        "resourceVersion": undefined,
                        "selfLink": undefined,
                        "uid": undefined,
                      },
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
                            "image": "pod-4-image",
                            "imagePullPolicy": undefined,
                            "lifecycle": undefined,
                            "livenessProbe": undefined,
                            "name": "pod-4-container",
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
});
