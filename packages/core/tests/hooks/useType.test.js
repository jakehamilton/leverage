const { add, useConfig, useType, useInstallEffect } = require("../../src");

describe("useType", () => {
    it("should set config.type", () => {
        const is = "plugin";
        const type = "http";
        let config;

        const plugin = {
            init: () => {
                useType(type);
                config = useConfig({ is });
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

    it("should get the current config.type after init", () => {
        const is = "plugin";
        const type = "http";
        let typeValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useInstallEffect(() => {
                    typeValue = useType();
                });
            },
        };

        add(plugin);

        expect(typeValue).toEqual(type);
    });

    it("should get the current config.type after install", () => {
        const is = "plugin";
        const type = "http";
        let typeValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                typeValue = useType();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(typeValue).toEqual(type);
    });

    it("should get the config.type value of another unit", () => {
        const is = "plugin";
        const type = "http";
        let typeValue;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                typeValue = useType(component);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(typeValue).toEqual(type);
    });

    it("should fail when mutating after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useInstallEffect(() => {
                        useType(type);
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
                install: () => {
                    useType(type);
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
