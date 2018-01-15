import { PluginUnit } from './plugin';
import { ServiceUnit } from './service';
import { ComponentUnit } from './component';
import { MiddlewareUnit } from './middleware';

import { LeverageUnit } from './leverage';

declare abstract class Manager {
    add: (...units: LeverageUnit[]) => void;

    addPlugin: (plugin: PluginUnit) => void;
    addService: (service: ServiceUnit) => void;
    addComponent: (component: ComponentUnit) => void;
    addMiddleware: (middleware: MiddlewareUnit) => void;
}

export default Manager;

export {
    Manager
};
