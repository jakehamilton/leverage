const { add, useConfig, useRef, useInstallEffect } = require("../../src");

describe("useRef", () => {
    it("should create a ref", () => {
        const is = "plugin";
        const type = "http";

        let ref;
        const value = undefined;

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                ref = useRef();
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(ref).toEqual({
            current: value,
        });
    });

    it("should create a ref with a default value", () => {
        const is = "plugin";
        const type = "http";

        let ref;
        const value = "value";

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                ref = useRef(value);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(ref).toEqual({
            current: value,
        });
    });

    it("should get the same ref", () => {
        const is = "plugin";
        const type = "http";

        const refs = [];
        const value = "value";

        const plugin = {
            init: () => {
                useConfig({ is, type });
            },
            install: () => {
                refs.push(useRef(value));
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

        add(plugin, componentOne, componentTwo);

        expect(refs[0]).toEqual({
            current: value,
        });

        expect(refs[1]).toEqual({
            current: value,
        });

        expect(refs[0]).toBe(refs[1]);
    });

    it("should fail before init", () => {
        expect(() => {
            const is = "plugin";
            const type = "http";

            const plugin = {
                init: () => {
                    useConfig({ is, type });
                    useRef();
                },
            };

            add(plugin);
        }).toThrow();
    });
});
