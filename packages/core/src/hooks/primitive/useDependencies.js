const deepmerge = require("deepmerge");
const { HOOKS_DATA } = require("../../util/symbols");

const useDependencies = (instance) => (dependencies) => {
    if (
        typeof dependencies === "object" &&
        dependencies.hasOwnProperty(HOOKS_DATA)
    ) {
        return dependencies[HOOKS_DATA].config.dependencies;
    } else if (dependencies !== undefined) {
        if (instance[HOOKS_DATA].initialized) {
            throw new Error(
                "Cannot mutate config.is after unit has been initialized."
            );
        } else {
            const { plugins, services } = instance[
                HOOKS_DATA
            ].config.dependencies;

            if (dependencies.plugins) {
                for (const plugin of dependencies.plugins) {
                    if (!plugins.includes(plugin)) {
                        plugins.push(plugin);
                    }
                }
            }

            if (dependencies.services) {
                for (const service of dependencies.services) {
                    if (!services.includes(service)) {
                        services.push(service);
                    }
                }
            }
        }
    }

    return instance[HOOKS_DATA].config.dependencies;
};

module.exports = useDependencies;
