const { HOOKS_DATA } = require("../../util/symbols");

const useRef = (instance) => (initialValue) => {
    if (!instance[HOOKS_DATA].installed) {
        throw new Error(
            `Cannot use useRef before unit is installed. Use useKeyRef instead.`
        );
    }

    const slot = instance[HOOKS_DATA].currentRefSlot;

    let ref;

    if (instance[HOOKS_DATA].refSlots.has(slot)) {
        ref = instance[HOOKS_DATA].refSlots.get(slot);
    } else {
        ref = {
            current: initialValue,
        };

        instance[HOOKS_DATA].refSlots.set(slot, ref);
    }

    instance[HOOKS_DATA].currentRefSlot++;

    return ref;
};

module.exports = useRef;
