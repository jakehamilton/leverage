const { add, useConfig, useHooks } = require("../../..");

describe.only("useHooks", () => {
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

        add(unit);

        expect(withHooks).toBeDefined();
        expect(typeof withHooks).toEqual("function");
    });
});
