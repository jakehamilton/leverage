const { add, useConfig, useKeyRef, useInstallEffect } = require("../../src");

describe("useKeyRef", () => {
    it("should create a ref", () => {
        const is = "plugin";
        const type = "http";

        let ref;
        const key = "key";
        const value = undefined;

        const plugin = {
            init: () => {
                useConfig({ is, type });

                ref = useKeyRef(key);
            },
        };

        add(plugin);

        expect(ref).toEqual({
            current: value,
        });
    });

    it("should create a ref with a default value", () => {
        const is = "plugin";
        const type = "http";

        let ref;
        const key = "key";
        const value = "value";

        const plugin = {
            init: () => {
                useConfig({ is, type });

                ref = useKeyRef(key, value);
            },
        };

        add(plugin);

        expect(ref).toEqual({
            current: value,
        });
    });

    it("should get the same ref", () => {
        const is = "plugin";
        const type = "http";

        let refOne;
        let refTwo;
        const key = "key";

        const plugin = {
            init: () => {
                useConfig({ is, type });

                refOne = useKeyRef(key);
                refTwo = useKeyRef(key);
            },
        };

        add(plugin);

        expect(refOne).toBe(refTwo);
    });

    it("should get the same ref after init", () => {
        const is = "plugin";
        const type = "http";

        let refOne;
        let refTwo;
        const key = "key";

        const plugin = {
            init: () => {
                useConfig({ is, type });

                refOne = useKeyRef(key);

                useInstallEffect(() => {
                    refTwo = useKeyRef(key);
                });
            },
        };

        add(plugin);

        expect(refOne).toBe(refTwo);
    });

    it("should get the same ref after install", () => {
        const is = "plugin";
        const type = "http";

        let refOne;
        let refTwo;
        const key = "key";

        const plugin = {
            init: () => {
                useConfig({ is, type });

                refOne = useKeyRef(key);
            },
            install: () => {
                refTwo = useKeyRef(key);
            },
        };

        const component = {
            init: () => {
                useConfig({ is: "component", type });
            },
        };

        add(plugin, component);

        expect(refOne).toBe(refTwo);
    });
});
