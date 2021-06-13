const { useWebSocket } = require("@leverage/plugin-websocket");

const init = () => {
    useWebSocket({
        event: "connect",
    });
};

const handler = (socket) => {
    console.log("connect", socket.id);
};

module.exports = {
    init,
    handler,
};
