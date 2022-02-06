const {
    Manager,
    useConfig,
    useDependencies,
    useService,
    useInstallEffect,
} = require("../../..");

let manager;

describe("useService", () => {
    beforeEach(() => {
        manager = new Manager();
    });

    it("should get a service after init", () => {
        let service;

        const http = {
            init: () => {
                useConfig({ is: "service", type: "http" });
                useDependencies({
                    services: ["websocket"],
                });

                useInstallEffect(() => {
                    service = useService("websocket");
                });
            },
        };

        const websocket = {
            init: () => {
                useConfig({ is: "service", type: "websocket" });
            },
        };

        manager.add(http, websocket);

        expect(service).toBe(websocket);
    });

    it("should fail before init", () => {
        expect(() => {
            const service = {
                init: () => {
                    useConfig({ is: "service", type: "http" });
                    useDependencies({
                        services: ["websocket"],
                    });

                    useService("websocket");
                },
            };

            manager.add(service);
        }).toThrow();
    });

    it("should fail for missing services", () => {
        expect(() => {
            const service = {
                init: () => {
                    useConfig({ is: "service", type: "http" });

                    useInstallEffect(() => {
                        useService("websocket");
                    });
                },
            };

            manager.add(service);
        }).toThrow();
    });
});
