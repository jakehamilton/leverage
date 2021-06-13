const { add, useConfig, useState } = require("../../..");

describe("useState", () => {
    it("should start with a default value", () => {
        const is = "plugin";
        const type = "http";

        let state;
        const value = "value";

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                [state] = useState(value);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(state).toEqual(value);
    });

    it("should update state", () => {
        const is = "plugin";
        const type = "http";

        let state;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: (component) => {
                component[type]();
                component[type]();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
            [type]: () => {
                const [currentState, setState] = useState(0);

                state = currentState;
                setState(currentState + 1);
            },
        };

        add(plugin, component);

        expect(state).toEqual(1);
    });

    it("should fail before install", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useState();
                },
            };

            add(plugin);
        }).toThrow();
    });
});
