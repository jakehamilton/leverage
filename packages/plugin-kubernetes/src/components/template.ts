import { Component, UnitIs, Unit, useConfig } from "@leverage/core";

export interface ChartTemplateComponent extends Component<"kubernetes"> {
    template: () => object;
}

export const isChartTemplateComponent = <
    Is extends UnitIs,
    Type extends string
>(
    unit: Unit<Is, Type>
): unit is ChartTemplateComponent => {
    const config = useConfig<Is, Type>(unit);

    return (
        config.type === "kubernetes" && config.kubernetes?.type === "template"
    );
};
