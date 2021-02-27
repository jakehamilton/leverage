const { add, useConfig, useIs, useInstallEffect } = require("../../src");

describe("useIs", () => {
    it("should set config.is", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const plugin = {
            init: () => {
                useIs(is);
                config = useConfig({ type });
            },
        };

        add(plugin);

        expect(config).toEqual({
            is,
            type,
            dependencies: {
                plugins: [],
                services: [],
            },
        });
    });

    it("should get the current config.is after init", () => {
        const is = "plugin";
        const type = "http";
        let isValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useInstallEffect(() => {
                    isValue = useIs();
                });
            },
        };

        add(plugin);

        expect(isValue).toEqual(is);
    });

    it("should get the current config.is after install", () => {
        const is = "plugin";
        const type = "http";
        let isValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                isValue = useIs();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(isValue).toEqual(is);
    });

    it("should get the config.is value of another unit", () => {
        const is = "plugin";
        const type = "http";
        const componentIs = "component";

        let isValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                isValue = useIs(component);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: componentIs, type });
            },
        };

        add(plugin, component);

        expect(isValue).toEqual(componentIs);
    });

    it("should fail when mutating after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useInstallEffect(() => {
                        useIs(is);
                    });
                },
            };

            add(plugin);
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
                install: (component) => {
                    useIs(is);
                },
            };

            const component = {
                init: () => {
                    useConfig({ is: "component", type });
                },
            };

            add(plugin, component);
        }).toThrow();
    });
});
