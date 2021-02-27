const {
    add,
    useConfig,
    useDependencies,
    useService,
    useInstallEffect,
} = require("../../src");

describe("useService", () => {
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

        add(http, websocket);

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

            add(service);
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

            add(service);
        }).toThrow();
    });
});
