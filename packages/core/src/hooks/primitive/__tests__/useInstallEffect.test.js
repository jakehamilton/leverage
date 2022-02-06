const { Manager, useConfig, useInstallEffect } = require("../../..");

let manager;

describe("useInstallEffect", () => {
    beforeEach(() => {
        manager = new Manager();
    });

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

        manager.add(plugin);

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

        manager.add(plugin);

        manager.remove(plugin);

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

            manager.add(plugin);

            expect(effect).toHaveBeenCalled();

            manager.remove(plugin);
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

            manager.add(plugin);

            manager.remove(plugin);

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

            manager.add(plugin, component);

            manager.remove(component);
        }).toThrow();
    });
});
