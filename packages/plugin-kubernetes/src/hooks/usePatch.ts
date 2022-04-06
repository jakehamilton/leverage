import { useConfig } from "@leverage/core";
import { KubernetesConfig } from "../config";

export type UsePatchOptions = NonNullable<
    KubernetesConfig["kubernetes"]["patch"]
>;

const usePatch = (config: UsePatchOptions) => {
    return useConfig<"component", "kubernetes">({
        is: "component",
        type: "kubernetes",
        kubernetes: {
            type: "patch",
            patch: {
                ...config,
            },
        },
    });
};

export default usePatch;
