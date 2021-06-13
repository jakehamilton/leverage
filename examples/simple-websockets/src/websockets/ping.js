const { useWebSocket } = require("@leverage/plugin-websocket");

const init = () => {
    useWebSocket({
        event: "ping",
    });
};

const handler = () => {
    console.log("pong!");
};

module.exports = {
    init,
    handler,
};
