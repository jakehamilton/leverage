const { Manager, useConfig, useEffect } = require("../../..");

let manager;

describe("useEffect", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should execute effects", () => {
        const is = "plugin";
        const type = "http";
        const effect = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                useEffect(effect);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        manager.add(plugin, component);

        expect(effect).toHaveBeenCalled();
    });

    it("should execute every time with no dependencies", () => {
        const is = "plugin";
        const type = "http";
        const effect = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                useEffect(effect);
            },
        };

        const componentOne = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        const componentTwo = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        manager.add(plugin, componentOne, componentTwo);

        expect(effect).toHaveBeenCalledTimes(2);
    });

    it("should execute only once with empty dependencies", () => {
        const is = "plugin";
        const type = "http";
        const effect = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                useEffect(effect, []);
            },
        };

        const componentOne = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        const componentTwo = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        manager.add(plugin, componentOne, componentTwo);

        expect(effect).toHaveBeenCalledTimes(1);
    });

    it("should execute when dependencies change", () => {
        const is = "plugin";
        const type = "http";
        const effect = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                const { value } = useConfig(component);

                useEffect(effect, [value]);
            },
        };

        const componentOne = {
            init: () => {
                useConfig({ is: "component", type, value: 1 });
            },
        };

        const componentTwo = {
            init: () => {
                useConfig({ is: "component", type, value: 2 });
            },
        };

        const componentThree = {
            init: () => {
                useConfig({ is: "component", type, value: 3 });
            },
        };

        manager.add(plugin, componentOne, componentTwo, componentThree);

        expect(effect).toHaveBeenCalledTimes(3);
    });

    it("should call cleanup when dependencies change", () => {
        const is = "plugin";
        const type = "http";
        const cleanup = jest.fn();

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                const { value } = useConfig(component);

                useEffect(() => cleanup, [value]);
            },
        };

        const componentOne = {
            init: () => {
                useConfig({ is: "component", type, value: 1 });
            },
        };

        const componentTwo = {
            init: () => {
                useConfig({ is: "component", type, value: 2 });
            },
        };

        const componentThree = {
            init: () => {
                useConfig({ is: "component", type, value: 3 });
            },
        };

        manager.add(plugin, componentOne, componentTwo, componentThree);

        expect(cleanup).toHaveBeenCalledTimes(2);
    });

    it("should call cleanup function before destroy", () => {
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
                useConfig({ is: "component", type });
            },
            [type]: () => {
                useEffect(() => {
                    return cleanup;
                });
            },
        };

        manager.add(plugin, component);

        manager.remove(component);

        expect(cleanup).toHaveBeenCalledTimes(1);
    });

    it("should fail when used before install", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";
            const cleanup = jest.fn();

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useEffect(() => {
                        return cleanup;
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();
    });
});
