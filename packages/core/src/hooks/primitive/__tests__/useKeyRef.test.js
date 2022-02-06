const { Manager, useConfig, useKeyRef, useInstallEffect } = require("../../..");

let manager;

describe("useKeyRef", () => {
    beforeEach(() => {
        manager = new Manager();
    });

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

        manager.add(plugin);

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

        manager.add(plugin);

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

        manager.add(plugin);

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

        manager.add(plugin);

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

        manager.add(plugin, component);

        expect(refOne).toBe(refTwo);
    });
});
