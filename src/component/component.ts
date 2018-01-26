import { ComponentUnit, ComponentConfig } from '../../types/component';
import { EmptyUnit } from '../../types/leverage';

function Component (config: any) {
    /*
     * Inheritance pattern
     */
    if (this instanceof Component) {
        (this as ComponentUnit).is = 'component';

        /*
         * Break early since this is all we need
         */
        return (null as any);
    }

    /*
     * Minimal decorator pattern
     */
    if (typeof config === 'function') {
        (config as ComponentUnit).is = 'component';
        (config as any).prototype.is = 'component';

        /*
         * Break early since this is all we need
         */
        return (null as any);
    }

    /*
     * Check validity of the config
     */
    if (typeof config !== 'object') {
        throw new Error(`[Component] Invalid config, expected "Object" but got "${typeof config}"`);
    }

    if (!config.hasOwnProperty('type')) {
        throw new Error(`[Component] Invalid config, expected a \`type\` property`);
    }

    if (typeof config.type !== 'string' && !Array.isArray(config.type)) {
        // tslint:disable-next-line:max-line-length
        throw new Error(`[Component] Invalid config, expected a string or array of strings for the property \`type\` but got "${typeof config.type}"`);
    }

    /*
     * Create a copy of the config
     */
    const copy: ComponentConfig = Object.assign({}, config);

    /**
     * Extend a class with a Leverage Component Configuration
     */
    function decorator (component: ComponentUnit | EmptyUnit): void {
        /*
         * Extend the given component class
         */
        (component as ComponentUnit).config = copy;
        (component as any).prototype.config = copy;

        /*
        * Set the kind of leverage unit this is
        */
        (component as ComponentUnit).is = 'component';
        (component as any).prototype.is = 'component';
    }

    return decorator;
}

export default Component;
