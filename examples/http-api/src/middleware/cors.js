const { useHTTP, useHTTPMiddleware } = require("@leverage/plugin-http");
const cors = require("cors");

const init = () => {
    useHTTP();

    useHTTPMiddleware(cors(), "cors");
};

module.exports = {
    init,
};
