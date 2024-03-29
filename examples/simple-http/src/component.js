const { useHTTP } = require("@leverage/plugin-http");

const init = () => {
    useHTTP({
        path: "/",
        method: "GET",
    });
};

const handler = (request, reply) => {
    reply.send("Hello, World!");
};

module.exports = {
    init,
    handler,
};
