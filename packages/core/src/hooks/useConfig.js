const deepmerge = require("deepmerge");
const { HOOKS_DATA } = require("../util/symbols");

const useConfig = (instance) => (config) => {
    if (typeof config === "object" && config.hasOwnProperty(HOOKS_DATA)) {
        return config[HOOKS_DATA].config;
    } else if (config !== undefined) {
        if (instance[HOOKS_DATA].initialized) {
            throw new Error(
                "Cannot mutate config after unit has been initialized."
            );
        } else {
            instance[HOOKS_DATA].config = deepmerge(
                instance[HOOKS_DATA].config,
                config
            );
        }
    }

    return instance[HOOKS_DATA].config;
};

module.exports = useConfig;
