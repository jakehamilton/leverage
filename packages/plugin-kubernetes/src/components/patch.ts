import { Component, Unit, UnitIs, useConfig } from "@leverage/core";

export interface PatchComponent extends Component<"kubernetes"> {
    patch: (manifest: object) => void;
}

export const isPatchComponent = <Is extends UnitIs, Type extends string>(
    unit: Unit<Is, Type>
): unit is PatchComponent => {
    const config = useConfig<Is, Type>(unit);

    return config.type === "kubernetes" && config.kubernetes?.type === "patch";
};
