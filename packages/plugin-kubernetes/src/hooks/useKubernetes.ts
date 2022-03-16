import { useConfig } from "@leverage/core";
import { KubernetesConfig } from "../config";

export type UseKubernetesOptions = NonNullable<
    KubernetesConfig["kubernetes"]["kubernetes"]
>;

const useKubernetes = (config: UseKubernetesOptions) => {
    return useConfig<"component", "kubernetes">({
        is: "component",
        type: "kubernetes",
        kubernetes: {
            type: "kubernetes",
            kubernetes: {
                ...config,
            },
        },
    });
};

export default useKubernetes;
