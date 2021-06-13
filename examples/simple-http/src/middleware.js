const { useHTTP } = require("@leverage/plugin-http");
const cors = require("cors");

const init = () => {
    useHTTP();
};

const middleware = cors();

module.exports = {
    init,
    middleware,
};
