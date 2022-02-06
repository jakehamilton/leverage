const { Manager, useConfig, useInstallEffect } = require("../../..");

let manager;

describe("useConfig", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should set the config", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const plugin = {
            init: () => {
                config = useConfig({ is, type });
            },
        };

        manager.add(plugin);

        expect(config).toEqual({
            is,
            type,
            dependencies: {
                plugins: [],
                services: [],
            },
        });
    });

    it("should get the current config after init", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useInstallEffect(() => {
                    config = useConfig();
                });
            },
        };

        manager.add(plugin);

        expect(config).toEqual({
            is,
            type,
            dependencies: {
                plugins: [],
                services: [],
            },
        });
    });

    it("should get the current config after install", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                config = useConfig();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        manager.add(plugin, component);

        expect(config).toEqual({
            is,
            type,
            dependencies: {
                plugins: [],
                services: [],
            },
        });
    });

    it("should get the config of another unit", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                config = useConfig(component);
            },
        };

        manager.add(plugin, component);

        expect(config).toEqual({
            is: "component",
            type,
            dependencies: {
                plugins: [type],
                services: [],
            },
        });
    });

    it("should fail when mutating after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useInstallEffect(() => {
                        useConfig({ is, type });
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();

        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useInstallEffect(() => {
                        useConfig({ is, type });
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();
    });

    it("should fail when mutating after install", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                },
                install: () => {
                    useConfig({ is, type });
                },
            };

            const component = {
                init: () => {
                    useConfig({ is: "component", type });
                },
            };

            manager.add(plugin, component);
        }).toThrow();
    });
});
