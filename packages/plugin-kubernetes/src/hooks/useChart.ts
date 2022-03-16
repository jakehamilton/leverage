import { useConfig } from "@leverage/core";
import { KubernetesConfig } from "../config";

export type UseChartOptions = NonNullable<
    KubernetesConfig["kubernetes"]["chart"]
>;

const useChart = (config: UseChartOptions) => {
    return useConfig<"component", "kubernetes">({
        is: "component",
        type: "kubernetes",
        kubernetes: {
            type: "chart",
            chart: {
                ...config,
            },
        },
    });
};

export default useChart;
