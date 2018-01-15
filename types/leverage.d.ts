import { PluginUnit } from './plugin';
import { ServiceUnit } from './service';
import { ComponentUnit } from './component';
import { MiddlewareUnit } from './middleware';

type LeverageUnit = PluginUnit | ServiceUnit | ComponentUnit | MiddlewareUnit;

interface LeverageInstance {
    config: {
        is: string;
        [key: string]: any;
    };

    [key: string]: any;
}

export {
    LeverageUnit,
    LeverageInstance,
};
