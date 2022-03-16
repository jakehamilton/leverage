import { useConfig } from "@leverage/core";
import { KubernetesConfig } from "../config";

export type UseTemplateOptions = NonNullable<
    KubernetesConfig["kubernetes"]["template"]
>;

const useChartTemplate = (config: UseTemplateOptions) => {
    return useConfig<"component", "kubernetes">({
        is: "component",
        type: "kubernetes",
        kubernetes: {
            type: "template",
            template: {
                ...config,
            },
        },
    });
};

export default useChartTemplate;
