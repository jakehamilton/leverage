const { Manager, useConfig, useHooks } = require("../../..");

let manager;

describe.only("useHooks", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should return a withHooks helper", () => {
        let withHooks;

        const unit = {
            init: () => {
                useConfig({
                    is: "component",
                    type: "example",
                });

                withHooks = useHooks();
            },
        };

        manager.add(unit);

        expect(withHooks).toBeDefined();
        expect(typeof withHooks).toEqual("function");
    });
});
