import { Component, Unit, UnitIs, useConfig } from "@leverage/core";

export interface KubernetesComponent extends Component<"kubernetes"> {
    render: () => object;
}

export const isKubernetesComponent = <Is extends UnitIs, Type extends string>(
    unit: Unit<Is, Type>
): unit is KubernetesComponent => {
    const config = useConfig<Is, Type>(unit);

    return (
        config.type === "kubernetes" && config.kubernetes?.type === "kubernetes"
    );
};
