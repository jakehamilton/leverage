const {
    add,
    useConfig,
    usePlugin,
    useDependencies,
    useInstallEffect,
} = require("../../..");

describe("useDependencies", () => {
    it("should set the dependencies", () => {
        const is = "plugin";
        const type = "http";
        const dependencyType = "websocket";
        let dependencies;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                dependencies = useDependencies({
                    plugins: [dependencyType],
                });
            },
        };

        add(plugin);

        expect(dependencies).toEqual({
            plugins: [dependencyType],
            services: [],
        });
    });

    it("should get the current dependencies after init", () => {
        const is = "plugin";
        const type = "http";
        const dependencyType = "websocket";
        let dependencies;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useDependencies({
                    plugins: [dependencyType],
                });

                useInstallEffect(() => {
                    dependencies = useDependencies();
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({ is, type: dependencyType });
            },
        };

        add(plugin, dependency);

        expect(dependencies).toEqual({
            plugins: [dependencyType],
            services: [],
        });
    });

    it("should get the current dependencies after install", () => {
        const is = "plugin";
        const type = "http";
        const dependencyType = "websocket";
        let dependencies;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useDependencies({
                    plugins: [dependencyType],
                });
            },
            install: () => {
                dependencies = useDependencies();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        const dependency = {
            init: () => {
                useConfig({ is, type: dependencyType });
            },
        };

        add(plugin, dependency, component);

        expect(dependencies).toEqual({
            plugins: [dependencyType],
            services: [],
        });
    });

    it("should get the current dependencies for a unit", () => {
        const is = "plugin";
        const type = "http";
        const dependencyType = "websocket";
        let dependencies;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                useDependencies({
                    plugins: [dependencyType],
                });
            },
            install: () => {
                const dependency = usePlugin(dependencyType);
                dependencies = useDependencies(dependency);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        const dependency = {
            init: () => {
                useConfig({ is, type: dependencyType });
            },
        };

        add(plugin, dependency, component);

        expect(dependencies).toEqual({
            plugins: [],
            services: [],
        });
    });

    it("should fail when mutating after init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";
            const dependencyType = "websocket";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useDependencies({
                        plugins: [dependencyType],
                    });

                    useInstallEffect(() => {
                        useDependencies({
                            plugins: [dependencyType],
                        });
                    });
                },
            };

            const dependency = {
                init: () => {
                    useConfig({ is, type: dependencyType });
                },
            };

            add(plugin, dependency);
        }).toThrow();
    });

    it("should fail when mutating after install", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";
            const dependencyType = "websocket";

            const plugin = {
                init: () => {
                    useConfig({ is, type });

                    useDependencies({
                        plugins: [dependencyType],
                    });
                },
                install: () => {
                    useDependencies({
                        plugins: [dependencyType],
                    });
                },
            };

            const component = {
                init: () => {
                    useConfig({ is: "component", type });
                },
            };

            const dependency = {
                init: () => {
                    useConfig({ is, type: dependencyType });
                },
            };

            add(plugin, dependency, component);
        }).toThrow();
    });
});
