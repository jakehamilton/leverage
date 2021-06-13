const { add, remove, useConfig, useEmitter, emitter } = require("../../..");

describe("useInstallEffect", () => {
    it("should execute install effects", () => {
        const is = "plugin";
        const type = "http";

        let emitterFromHook;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                emitterFromHook = useEmitter();
            },
        };

        add(plugin);

        expect(emitterFromHook).toBeDefined();
        expect(emitterFromHook).toBe(emitter);
    });
});
