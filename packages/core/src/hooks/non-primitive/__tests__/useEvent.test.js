const { Manager, useConfig, useEvent } = require("../../..");

let manager;

describe("useEvent", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should handle a named event", () => {
        const mock = jest.fn();

        const unit = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: "example",
                });

                useEvent("act", mock);
            },
        };

        manager.add(unit);

        manager.emit("act");

        expect(mock).toHaveBeenCalled();
    });

    it("should handle wildcard events", () => {
        const mock = jest.fn();

        const unit = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: "example",
                });

                useEvent("*", mock);
            },
        };

        manager.add(unit);

        manager.emit("act");
        manager.emit("other-act");

        expect(mock).toHaveBeenCalledTimes(2);
    });

    it("should return an unsubscribe helper", () => {
        const mock = jest.fn();
        let unsubscribe;

        const unit = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: "example",
                });

                unsubscribe = useEvent("*", mock);
            },
        };

        manager.add(unit);

        manager.emit("act");

        unsubscribe();

        manager.emit("act");

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it("should be able to unsubscribe before init is finished", () => {
        const mock = jest.fn();

        const unit = {
            init: () => {
                useConfig({
                    is: "plugin",
                    type: "example",
                });

                const unsubscribe = useEvent("*", mock);
                unsubscribe();
            },
        };

        manager.add(unit);

        manager.emit("act");

        expect(mock).not.toHaveBeenCalled();
    });
});
