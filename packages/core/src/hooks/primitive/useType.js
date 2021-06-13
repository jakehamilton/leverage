const { HOOKS_DATA } = require("../../util/symbols");

const useType = (instance) => (type) => {
    if (typeof type === "object" && type.hasOwnProperty(HOOKS_DATA)) {
        return type[HOOKS_DATA].config.type;
    } else if (type !== undefined) {
        if (instance[HOOKS_DATA].initialized) {
            throw new Error(
                "Cannot mutate config.type after unit has been initialized."
            );
        } else {
            instance[HOOKS_DATA].config.type = type;
        }
    }

    return instance[HOOKS_DATA].config.type;
};

module.exports = useType;
