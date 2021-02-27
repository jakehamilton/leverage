const { HOOKS_DATA } = require("../util/symbols");

const useKeyRef = (instance) => (key, initialValue) => {
    if (instance[HOOKS_DATA].keyRefs.has(key)) {
        return instance[HOOKS_DATA].keyRefs.get(key);
    } else {
        const ref = {
            current: initialValue,
        };

        instance[HOOKS_DATA].keyRefs.set(key, ref);

        return ref;
    }
};

module.exports = useKeyRef;
