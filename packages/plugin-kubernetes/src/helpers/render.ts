import { Manager, emit } from "@leverage/core";
import { KubernetesRenderOptions } from "..";

function render(
    options: KubernetesRenderOptions & { type: "kubernetes" },
    manager?: Manager
): Promise<ReturnType<NonNullable<typeof options["callback"]>>>;
function render(
    options: KubernetesRenderOptions & { type: "helm" },
    manager?: Manager
): Promise<ReturnType<NonNullable<typeof options["callback"]>>>;
function render(
    options: KubernetesRenderOptions & { type: "chart" },
    manager?: Manager
): Promise<ReturnType<NonNullable<typeof options["callback"]>>>;
function render(
    options: KubernetesRenderOptions & { type: "all" },
    manager?: Manager
): Promise<ReturnType<NonNullable<typeof options["callback"]>>>;

function render(options: KubernetesRenderOptions, manager?: Manager) {
    return new Promise((resolve, reject) => {
        const callback = (
            value: Parameters<NonNullable<typeof options["callback"]>>[0]
        ) => {
            // @ts-expect-error
            options.callback?.(value);
            resolve(value);
        };

        if (manager !== undefined) {
            manager.emit("kubernetes:render", {
                ...options,
                callback,
            });
        } else {
            emit("kubernetes:render", {
                ...options,
                callback,
            });
        }
    });
}

export default render;
