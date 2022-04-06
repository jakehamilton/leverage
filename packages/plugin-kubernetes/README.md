<p align="center">
    <img src="https://raw.githubusercontent.com/jakehamilton/leverage/main/.md-assets/logo.png" width="120" height="120" alt="Leverage Logo">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/made_with-love-ff69b4.svg?style=for-the-badge">
</p>

<h1 align="center">@leverage/kubernetes</h1>

> **NOTE**: This library is quite new and things are still being
> fleshed out. It should work, but be prepared for a few quirks!

## Installation

First, install the package with your preferred package manager.

```bash
npm install @leverage/kubernetes
```

Then, add the `kubernetes` plugin to your Leverage manager.

```ts
import { add } from "@leverage/core";
import { kubernetes } from "@leverage/kubernetes";

add(kubernetes);
```

## Usage

### Kubernetes Resources

You can use this plugin in combination with [Senchou](https://github.com/jakehamilton/senchou/tree/main/packages/cli)
to generate and manage Kubernetes resources. First, use Senchou to generate a
module with Kubernetes API Object definitions.

```bash
npx @senchou/cli k8s
```

Then, create a `KubernetesComponent` for your resource.

```ts
// my-pod.ts
import { Pod } from "./senchou/k8s.ts";
import { useKubernetes } from "@leverage/kubernetes";

export const init = () => {
    useKubernetes({
        name: "my-pod",
    });
};

export const render = () => {
    return Pod({
        metadata: {
            name: "my-pod",
            labels: {
                "x-generated-by": "leverage",
            },
        },
        spec: {
            containers: [{ image: "my-image" }],
        },
    });
};
```

And finally add that unit to your manager instance and render.

```ts
import { add } from "@leverage/core";
import { kubernetes, render } from "@leverage/kubernetes";
import myPod from "./my-pod";

add(kubernetes, myPod);

const output = await render();
```

### Helm Resources

You can use existing helm charts by creating a `HelmComponent`.

```ts
// my-helm-component.ts
import { useHelm } from "@leverage/kubernetes";

export const init = () => {
    useHelm({
        name: "my-traefik-release",
        chart: "traefik/traefik",
        repository: {
            name: "traefik",
            url: "https://helm.traefik.io/traefik",
        },
    });
};

export const values = () => {
    return {
        mySetting: true,
    };
};
```

Then add the component and plugin to Leverage in order to render the chart.

```ts
import { add } from "@leverage/core";
import { kubernetes, render } from "@leverage/kubernetes";
import myHelmComponent from "./my-helm-component";

add(kubernetes, myHelmComponent);

const output = await render();
```

### Custom Helm Charts

You can use this plugin with [`@senchou/helm`](https://github.com/jakehamilton/senchou/tree/main/packages/helm)
to create your own charts.

Start by creating a `ChartComponent`.

```ts
// my-chart.ts
import { useChart } from "@leverage/kubernetes";

export const init = () => {
    useChart({
        name: "my-chart",
        meta: {
            version: "0.0.0",
        },
        values: {
            http: {
                enable: true,
                port: 80,
            },
        },
    });
};
```

Then, create a `ChartTemplateComponent` to add a resource to the chart.

```ts
// my-pod-template.ts
import { useChartTemplate } from "@leverage/kubernetes";
import { template } from "@senchou/helm";
import { Pod, ContainerPort } from "./senchou/k8s";

export const init = () => {
    useChartTemplate({
        name: "my-pod",
    });
};

export const render = () => {
    return template(Pod, {
        metadata: {
            name: "my-pod",
        },
        spec: {
            containers: [
                {
                    name: "my-container",
                    image: "my-image",
                    ports: [
                        template.if<ContainerPort>({
                            type: Object,
                            condition: ".Values.http.enable",
                            body: {
                                name: "http",
                                containerPort: template.string(
                                    ".Values.http.port"
                                ),
                            },
                            else: [],
                        }),
                    ],
                },
            ],
        },
    });
};
```

Finally, add this plugin and all of your units to your
Leverage Manager and call render.

```ts
import { add } from "@leverage/core";
import { kubernetes, render } from "@leverage/kubernetes";
import myChart from "./my-chart";
import myPodTemplate from "./my-pod-template";

add(kubernetes, myChart, myPodTemplate);

const output = await render();
```

### Patch Resources

You can apply patches to Kubernetes resources by creating
a `PatchComponent`.

```ts
// my-patch.ts
import { usePatch } from "@leverage/kubernetes";
import { isPod } from "./senchou/k8s";

export const init = () => {
    usePatch({
        name: "my-patch",
    });
};

export const patch = (resource: object) => {
    // This patch will be responsible for patching Pod resources.
    if (isPod(resource)) {
        resource.metadata.labels = {
            ...resource.metadata.labels,
            "x-patched-by": "leverage",
        };
    }
};
```

Then add your patch along with all of your other components.
When rendered, patches will be applied before the final output is
returned.

```ts
import { add } from "@leverage/core";
import { kubernetes, render } from "@leverage/kubernetes";
import myPod from "./my-pod";
import myPatch from "./my-patch";

add(kubernetes, myPod, myPatch);

const output = await render();
```
