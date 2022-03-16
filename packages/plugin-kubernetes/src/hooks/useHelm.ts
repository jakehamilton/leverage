import { useConfig } from "@leverage/core";
import { KubernetesConfig } from "../config";

export type UseHelmOptions = NonNullable<
    KubernetesConfig["kubernetes"]["helm"]
>;

const useHelm = (config: UseHelmOptions) => {
    return useConfig<"component", "kubernetes">({
        is: "component",
        type: "kubernetes",
        kubernetes: {
            type: "helm",
            helm: {
                ...config,
            },
        },
    });
};

export default useHelm;
