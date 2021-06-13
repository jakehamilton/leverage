const {
    useConfig,
    useKeyRef,
    useEvent,
    useEmitter,
    useHooks,
} = require("@leverage/core");
const { useHTTPDependency, useFastify } = require("@leverage/plugin-http");
const socketio = require("fastify-socket.io");

const useIO = () => {
    const ioRef = useKeyRef("io");

    return ioRef.current;
};

const init = () => {
    useConfig({
        is: "plugin",
        type: "websocket",
    });

    useHTTPDependency();

    const withHooks = useHooks();
    const emitter = useEmitter();

    const ioRef = useKeyRef("io", null);
    const isFastifyReadyRef = useKeyRef("isFastifyReady", false);
    const websocketConfigRef = useKeyRef("websocketConfig", {});
    const componentsRef = useKeyRef("components", []);

    useEvent("weboscket:configure", (config) => {
        websocketConfigRef.current = config;
    });

    useEvent("http:configured", async () => {
        isFastifyReadyRef.current = true;
    });

    useEvent("websocket:attach", async () => {
        const installComponents = withHooks(() => {
            for (const component of componentsRef.current) {
                const config = useConfig(component);

                if (
                    config.websocket.event === "disconnect" ||
                    config.websocket.event === "connect"
                ) {
                    ioRef.current.on(config.websocket.event, component.handler);
                } else {
                    ioRef.current.on(
                        "connect",
                        withHooks((socket) => {
                            socket.on(config.websocket.event, (data) => {
                                component.handler(socket, data);
                            });
                        })
                    );
                }
            }
        });

        const attach = withHooks(async () => {
            const fastify = useFastify();

            await fastify.register(socketio, websocketConfigRef.current);

            ioRef.current = fastify.io;

            installComponents();

            emitter.emit("websocket:attached");
        });

        if (isFastifyReadyRef.current) {
            attach();
        } else {
            emitter.once("http:configured", attach);
        }
    });
};

const install = (component) => {
    const withHooks = useHooks();

    const ioRef = useKeyRef("io");
    const componentsRef = useKeyRef("components");

    if (ioRef.current) {
        const config = useConfig(component);

        if (
            config.websocket.event === "disconnect" ||
            config.websocket.event === "connect"
        ) {
            ioRef.current.on(config.websocket.event, component.handler);
        } else {
            ioRef.current.on(
                "connect",
                withHooks((socket) => {
                    socket.on(config.websocket.event, (data) => {
                        component.handler(socket, data);
                    });
                })
            );
        }
    }

    componentsRef.current.push(component);
};

module.exports = {
    init,
    install,
    useIO,
};
