const deepmerge = require("deepmerge");
const { HOOKS_DATA } = require("../util/symbols");

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
            instance[HOOKS_DATA].config.dependencies = deepmerge(
                instance[HOOKS_DATA].config.dependencies,
                dependencies
            );
        }
    }

    return instance[HOOKS_DATA].config.dependencies;
};

module.exports = useDependencies;
