const { useConfig, usePlugin } = require("@leverage/core");

const useWebSocket = (config) => {
    useConfig({
        is: "component",
        type: "websocket",
        websocket: config,
    });
};

const useIO = () => {
    const { useIO } = usePlugin("websocket");

    return useIO();
};

module.exports = {
    useWebSocket,
    useIO,
};
