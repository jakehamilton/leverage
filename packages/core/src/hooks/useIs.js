const { HOOKS_DATA } = require("../util/symbols");

const useIs = (instance) => (is) => {
    if (typeof is === "object" && is.hasOwnProperty(HOOKS_DATA)) {
        return is[HOOKS_DATA].config.is;
    } else if (is !== undefined) {
        if (instance[HOOKS_DATA].initialized) {
            throw new Error(
                "Cannot mutate config.is after unit has been initialized."
            );
        } else {
            instance[HOOKS_DATA].config.is = is;
        }
    }

    return instance[HOOKS_DATA].config.is;
};

module.exports = useIs;
