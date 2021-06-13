const { HOOKS_DATA } = require("../../util/symbols");

const usePlugin = (instance) => (type) => {
    if (!instance[HOOKS_DATA].initialized) {
        throw new Error(
            "Cannot get a plugin before initialization has finished."
        );
    } else {
        return instance[HOOKS_DATA].manager.getService(type);
    }
};

module.exports = usePlugin;
