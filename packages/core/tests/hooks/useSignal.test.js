const { add, signal, useConfig, useSignal } = require("../../src");

describe("useSignal", () => {
    it("should execute when signalled", () => {
        const is = "plugin";
        const type = "http";

        const callback = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useSignal(callback);
            },
        };

        add(plugin);

        signal({ is, type });

        expect(callback).toHaveBeenCalled();
    });
});
