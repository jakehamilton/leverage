const { Manager, useConfig, useEmitter, emitter } = require("../../..");

let manager;

describe("useInstallEffect", () => {
    beforeEach(() => {
        manager = new Manager();
    });

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

        manager.add(plugin);

        expect(emitterFromHook).toBeDefined();
        expect(emitterFromHook).toBe(emitter);
    });
});
