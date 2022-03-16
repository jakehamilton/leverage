import { Component, Unit, UnitIs, useConfig } from "@leverage/core";

export interface HelmComponent extends Component<"kubernetes"> {
    values?: () => object;
    patch?: (manifests: Array<object>) => void;
}

export const isHelmComponent = <Is extends UnitIs, Type extends string>(
    unit: Unit<Is, Type>
): unit is HelmComponent => {
    const config = useConfig<Is, Type>(unit);

    return config.type === "kubernetes" && config.kubernetes?.type === "helm";
};
