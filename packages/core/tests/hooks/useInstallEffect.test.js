const { add, remove, useConfig, useInstallEffect } = require("../../src");

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

    it("should fail when used after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useInstallEffect(() => {
                        useInstallEffect(() => {});
                    });
                },
            };

            add(plugin);

            remove(plugin);
        }).toThrow();
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
