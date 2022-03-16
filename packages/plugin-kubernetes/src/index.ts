import { KubernetesConfig } from "./config";
import plugin, { KubernetesPlugin, KubernetesRenderOptions } from "./plugin";

export * from "./components/all";
export * from "./components/helm";
export * from "./components/chart";
export * from "./components/kubernetes";
export * from "./components/patch";

export { default as useHelm } from "./hooks/useHelm";
export { default as useChart } from "./hooks/useChart";
export { default as useChartTemplate } from "./hooks/useChartTemplate";
export { default as useKubernetes } from "./hooks/useKubernetes";
export { default as usePatch } from "./hooks/usePatch";

export type { KubernetesRenderOptions } from "./plugin";
export { KubernetesPlugin, UNKNOWN_NAME } from "./plugin";

export default plugin;

declare module "@leverage/core" {
    export function usePlugin(event: "kubernetes"): KubernetesPlugin;

    export interface UnitConfig<Is extends UnitIs, Type extends string>
        extends Partial<KubernetesConfig> {}

    export function useEvent(
        event: "kubernetes:render",
        payload: (options: KubernetesRenderOptions) => void
    ): Unsubscribe<"kubernetes:render">;

    export function emit(
        event: "kubernetes:render",
        payload: KubernetesRenderOptions
    ): void;
    export function on(
        event: "kubernetes:render",
        payload: (options: KubernetesRenderOptions) => void
    ): void;
    export function off(
        event: "kubernetes:render",
        payload: (options: KubernetesRenderOptions) => void
    ): void;
    export function once(
        event: "kubernetes:render",
        payload: (options: KubernetesRenderOptions) => void
    ): void;
}
