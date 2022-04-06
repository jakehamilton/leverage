import { Component, UnitIs, Unit, useConfig } from "@leverage/core";

export interface ChartComponent extends Component<"kubernetes"> {}

export const isChartComponent = <Is extends UnitIs, Type extends string>(
    unit: Unit<Is, Type>
): unit is ChartComponent => {
    const config = useConfig<Is, Type>(unit);

    return config.type === "kubernetes" && config.kubernetes?.type === "chart";
};
