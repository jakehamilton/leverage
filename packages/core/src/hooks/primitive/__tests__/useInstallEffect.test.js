const { add, remove, useConfig, useInstallEffect } = require("../../..");

describe("useInstallEffect", () => {
    it("should execute install effects", () => {
        const is = "plugin";
        const type = "http";
        const effect = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
                useInstallEffect(effect);
            },
        };

        add(plugin);

        expect(effect).toHaveBeenCalled();
    });

    it("should call cleanup function before destroy", () => {
        const is = "plugin";
        const type = "http";
        const cleanup = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
                useInstallEffect(() => cleanup);
            },
        };

        add(plugin);

        remove(plugin);

        expect(cleanup).toHaveBeenCalled();
    });

    it("should fire immediately when used after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const effect = jest.fn();

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useInstallEffect(() => {
                        useInstallEffect(effect);
                    });
                },
            };

            add(plugin);

            expect(effect).toHaveBeenCalled();

            remove(plugin);
        }).not.toThrow();
    });

    it("should call cleanup after an immediate effect", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const effect = jest.fn();

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useInstallEffect(() => {
                        useInstallEffect(() => effect);
                    });
                },
            };

            add(plugin);

            remove(plugin);

            expect(effect).toHaveBeenCalled();
        }).not.toThrow();
    });

    it("should fail when used after install", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";
            const cleanup = jest.fn();

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                },
                install: (component) => {
                    component[type]();
                },
            };

            const component = {
                init: () => {
                    useConfig({ is: "plugin", type });
                },
                http: () => {
                    useInstallEffect(() => {});
                },
            };

            add(plugin, component);

            remove(component);
        }).toThrow();
    });
});
