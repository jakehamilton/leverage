const { useHTTP, useMiddleware } = require("@leverage/plugin-http");
const cors = require("cors");

const init = () => {
    useHTTP();

    useMiddleware(cors(), "cors");
};

module.exports = {
    init,
};
