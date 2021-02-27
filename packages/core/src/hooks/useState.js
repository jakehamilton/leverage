const { HOOKS_DATA } = require("../util/symbols");

const useState = (instance) => (initialValue) => {
    if (!instance[HOOKS_DATA].installed) {
        throw new Error("Cannot use useState in a unit before it's installed.");
    }

    const slot = instance[HOOKS_DATA].currentStateSlot;
    instance[HOOKS_DATA].currentStateSlot++;

    let value;

    if (instance[HOOKS_DATA].stateSlots.has(slot)) {
        value = instance[HOOKS_DATA].stateSlots.get(slot);
    } else {
        value = initialValue;
        instance[HOOKS_DATA].stateSlots.set(slot, value);
    }

    const setValue = (nextValue) => {
        instance[HOOKS_DATA].stateSlots.set(slot, nextValue);
    };

    return [value, setValue];
};

module.exports = useState;
