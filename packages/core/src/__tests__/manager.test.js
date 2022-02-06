const { Manager, useConfig } = require("..");
const { HOOKS_DATA } = require("../util/symbols");

describe("manager", () => {
    let manager;

    beforeEach(() => {
        manager = new Manager();
    });

    it("should fail to add units without an init method", () => {
        expect(() => {
            const plugin = {};

            manager.add(plugin);
        }).toThrow();
    });

    it("should fail to add units without config.is", () => {
        expect(() => {
            const plugin = {
                init: () => {
                    useConfig({
                        is: "plugin",
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();
    });

    it("should fail to add units without config.type", () => {
        expect(() => {
            const plugin = {
                init: () => {
                    useConfig({
                        type: "example",
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();
    });

    it("should fail to add units with an unknown config.is", () => {
        expect(() => {
            const plugin = {
                init: () => {
                    useConfig({
                        is: "does-not-exist",
                        type: "example",
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();

        expect(() => {
            const unit = {
                init: () => {
                    useConfig({
                        is: "plugin",
                        type: "example",
                    });
                },
            };

            manager.init(unit);

            unit[HOOKS_DATA].config.is = "unknown";

            manager.isInstalled(unit);
        }).toThrow();
    });

    it("should install units without dependencies", () => {
        const type = "example";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        manager.add(service, plugin, component);

        expect(manager.services.installed.get(type)).toBe(service);
        expect(manager.plugins.installed.get(type)).toBe(plugin);
        expect(manager.components.installed.get(type).has(component)).toEqual(
            true
        );
    });

    it("should install units with dependencies", () => {
        const type = "example";
        const dependencyType = "dependency";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: [dependencyType],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: dependencyType,
                });
            },
        };

        manager.add(service, plugin, component, dependency);

        expect(manager.services.installed.get(type)).toBe(service);
        expect(manager.plugins.installed.get(type)).toBe(plugin);
        expect(manager.components.installed.get(type).has(component)).toEqual(
            true
        );
    });

    it("should wait to install units with missing dependencies", () => {
        const type = "example";
        const dependencyType = "dependency";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: [dependencyType],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: dependencyType,
                });
            },
        };

        manager.add(service, plugin, component);

        expect(manager.services.waiting.get(type)).toBe(service);
        expect(manager.plugins.waiting.get(type)).toBe(plugin);
        expect(manager.components.waiting.get(type).has(component)).toEqual(
            true
        );

        manager.add(dependency);

        expect(manager.services.installed.get(type)).toBe(service);
        expect(manager.plugins.installed.get(type)).toBe(plugin);
        expect(manager.components.installed.get(type).has(component)).toEqual(
            true
        );
    });

    it("should get a service by type", () => {
        const type = "example";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                });
            },
        };

        manager.add(service);

        expect(manager.getService(type)).toBe(service);
    });

    it("should fail to get a missing service", () => {
        expect(() => {
            const type = "example";

            manager.getService(type);
        }).toThrow();
    });

    it("should get a plugin by type", () => {
        const type = "example";

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                });
            },
        };

        manager.add(plugin);

        expect(manager.getPlugin(type)).toBe(plugin);
    });

    it("should fail to get a missing plugin", () => {
        expect(() => {
            const type = "example";

            manager.getPlugin(type);
        }).toThrow();
    });

    it("should wrap unit methods with hooks", () => {
        expect(() => {
            const type = "example";

            const callback = () => {
                useConfig();
            };

            const plugin = {
                init: () => {
                    useConfig({
                        is: "plugin",
                        type,
                    });
                },
                [type]: callback,
            };

            manager.add(plugin);

            expect(plugin[type]).not.toBe(callback);
        }).not.toThrow();
    });

    it("should fail when adding duplicate services", () => {
        expect(() => {
            const is = "service";
            const type = "example";

            const serviceOne = {
                init: () => {
                    useConfig({ is, type });
                },
            };

            const serviceTwo = {
                init: () => {
                    useConfig({ is, type });
                },
            };

            manager.add(serviceOne, serviceTwo);
        }).toThrow();
    });

    it("should fail when adding duplicate plugins", () => {
        expect(() => {
            const is = "plugin";
            const type = "example";

            const pluginOne = {
                init: () => {
                    useConfig({ is, type });
                },
            };

            const pluginTwo = {
                init: () => {
                    useConfig({ is, type });
                },
            };

            manager.add(pluginOne, pluginTwo);
        }).toThrow();
    });

    it("should fail when adding duplicate components", () => {
        expect(() => {
            const is = "component";
            const type = "example";

            const component = {
                init: () => {
                    useConfig({ is, type });
                },
            };

            manager.add(component, component);
        }).toThrow();
    });

    it("should remove units", () => {
        const type = "example";
        const dependencyType = "dependency";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: [dependencyType],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: dependencyType,
                });
            },
        };

        manager.add(service, plugin, component, dependency);

        manager.remove(service);
        manager.remove(plugin);
        manager.remove(component);
        manager.remove(dependency);

        expect(manager.services.installed.has(type)).toBe(false);
        expect(manager.services.waiting.has(type)).toBe(false);

        expect(manager.plugins.installed.has(type)).toBe(false);
        expect(manager.plugins.waiting.has(type)).toBe(false);

        expect(manager.plugins.installed.has(dependencyType)).toBe(false);
        expect(manager.plugins.waiting.has(dependencyType)).toBe(false);

        expect(manager.components.installed.get(type).size).toBe(0);
        expect(manager.components.waiting.get(type).size).toBe(0);
    });

    it("should uninstall units with dependencies of a removed unit", () => {
        const type = "example";
        const dependencyType = "dependency";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: [dependencyType],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: dependencyType,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        manager.add(service, plugin, component, dependency);

        manager.remove(dependency);

        expect(manager.services.installed.has(type)).toBe(false);
        expect(manager.services.waiting.has(type)).toBe(true);

        expect(manager.plugins.installed.has(type)).toBe(false);
        expect(manager.plugins.waiting.has(type)).toBe(true);

        expect(manager.plugins.installed.has(dependencyType)).toBe(false);
        expect(manager.plugins.waiting.has(dependencyType)).toBe(false);

        expect(manager.components.installed.get(type).size).toBe(0);
        expect(manager.components.waiting.get(type).size).toBe(1);
    });

    it("should remove all units when reset", () => {
        const type = "example";
        const dependencyType = "dependency";

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: [type],
                    },
                });
            },
        };

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: [dependencyType],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        const dependency = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: dependencyType,
                });
            },
        };

        manager.add(service, plugin, component, dependency);

        manager.reset();

        expect(manager.services.installed.has(type)).toBe(false);
        expect(manager.services.waiting.has(type)).toBe(false);

        expect(manager.plugins.installed.has(type)).toBe(false);
        expect(manager.plugins.waiting.has(type)).toBe(false);

        expect(manager.plugins.installed.has(dependencyType)).toBe(false);
        expect(manager.plugins.waiting.has(dependencyType)).toBe(false);

        expect(manager.components.installed.get(type).size).toBe(0);
        expect(manager.components.waiting.get(type).size).toBe(0);
    });

    it("should wait for dependencies to install units", () => {
        const type = "example";
        const componentType = "doesNotExist";

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: "example",
                    dependencies: {
                        plugins: ["doesNotExist"],
                        services: ["doesNotExist"],
                    },
                });
            },
        };

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type: "example",
                    dependencies: {
                        plugins: [],
                        services: ["doesNotExist"],
                    },
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type: "doesNotExist",
                    dependencies: {
                        plugins: [],
                        services: ["doesNotExist"],
                    },
                });
            },
        };

        manager.add(plugin, service, component);

        expect(manager.services.installed.has(type)).toBe(false);
        expect(manager.services.waiting.has(type)).toBe(true);

        expect(manager.plugins.installed.has(type)).toBe(false);
        expect(manager.plugins.waiting.has(type)).toBe(true);

        expect(manager.plugins.installed.has(componentType)).toBe(false);
        expect(manager.plugins.waiting.has(componentType)).toBe(false);

        expect(manager.components.installed.get(componentType).size).toBe(0);
        expect(manager.components.waiting.get(componentType).size).toBe(1);
    });

    it("should not install units that are already installed", () => {
        const type = "example";

        const plugin = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                });
            },
        };

        const service = {
            init: () => {
                useConfig({
                    is: "service",
                    type,
                });
            },
        };

        const component = {
            init: () => {
                useConfig({
                    is: "component",
                    type,
                });
            },
        };

        manager.init(plugin);
        manager.init(service);
        manager.init(component);

        manager.plugins.installed.set(type, plugin);
        manager.services.installed.set(type, service);
        manager.components.installed.set(type, new Set([component]));

        manager.install(plugin);
        manager.install(service);
        manager.install(component);
    });

    it("can install and uninstall many units", () => {
        const types = "abcdefghijklmnopqrstuvwxyz".split("");

        const services = types.map((type) => ({
            init: () => {
                useConfig({
                    is: "service",
                    type,
                    dependencies: {
                        plugins: types,
                        services: types.filter((t) => t !== type),
                    },
                });
            },
        }));

        const plugins = types.map((type) => ({
            init: () => {
                useConfig({
                    is: "plugin",
                    type,
                    dependencies: {
                        plugins: types.filter((t) => t !== type),
                        services: types,
                    },
                });
            },
        }));

        const components = types.map((type) => ({
            init: () => {
                useConfig({
                    is: "component",
                    type,
                    dependencies: {
                        plugins: types.filter((t) => t !== type),
                        services: types,
                    },
                });
            },
        }));

        manager.add(...components.slice(0, types.length / 2));
        manager.add(...services.slice(0, types.length / 2));
        manager.add(...plugins.slice(0, types.length / 2));

        manager.add(
            ...components.slice(types.length / 2),
            ...services.slice(types.length / 2),
            ...plugins.slice(types.length / 2)
        );

        manager.remove(...components.slice(0, types.length / 2));
        manager.remove(...services.slice(0, types.length / 2));
        manager.remove(...plugins.slice(0, types.length / 2));

        manager.remove(
            ...components.slice(types.length / 2),
            ...services.slice(types.length / 2),
            ...plugins.slice(types.length / 2)
        );
    });
});
