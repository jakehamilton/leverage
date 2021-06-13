const { add, useConfig, useUnit } = require("../../..");

describe("useUnit", () => {
    it("should return the current unit", () => {
        let unit;

        const plugin = {
            init: () => {
                useConfig({ is: "plugin", type: "example" });

                unit = useUnit();
            },
        };

        add(plugin);

        expect(unit).toBe(plugin);
    });
});
