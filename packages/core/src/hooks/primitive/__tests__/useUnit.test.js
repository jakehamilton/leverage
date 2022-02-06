const { Manager, useConfig, useUnit } = require("../../..");

let manager;

describe("useUnit", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should return the current unit", () => {
        let unit;

        const plugin = {
            init: () => {
                useConfig({ is: "plugin", type: "example" });

                unit = useUnit();
            },
        };

        manager.add(plugin);

        expect(unit).toBe(plugin);
    });
});
