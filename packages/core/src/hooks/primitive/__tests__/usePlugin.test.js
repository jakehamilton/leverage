const {
    Manager,
    useConfig,
    useDependencies,
    usePlugin,
    useInstallEffect,
} = require("../../..");

let manager;

describe("usePlugin", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should get a plugin after init", () => {
        let plugin;

        const http = {
            init: () => {
                useConfig({ is: "plugin", type: "http" });
                useDependencies({
                    plugins: ["websocket"],
                });

                useInstallEffect(() => {
                    plugin = usePlugin("websocket");
                });
            },
        };

        const websocket = {
            init: () => {
                useConfig({ is: "plugin", type: "websocket" });
            },
        };

        manager.add(http, websocket);

        expect(plugin).toBe(websocket);
    });

    it("should fail before init", () => {
        expect(() => {
            const plugin = {
                init: () => {
                    useConfig({ is: "plugin", type: "http" });
                    useDependencies({
                        plugins: ["websocket"],
                    });

                    usePlugin("websocket");
                },
            };

            manager.add(plugin);
        }).toThrow();
    });

    it("should fail for missing plugins", () => {
        expect(() => {
            const plugin = {
                init: () => {
                    useConfig({ is: "plugin", type: "http" });

                    useInstallEffect(() => {
                        usePlugin("websocket");
                    });
                },
            };

            manager.add(plugin);
        }).toThrow();
    });
});
