const { add, emit, emitter } = require("@leverage/core");
const { http } = require("@leverage/plugin-http");

const component = require("./component");
const middleware = require("./middleware");

const main = async () => {
    add(http, component, middleware);

    emit("http:configure", {
        logger: true,
        ignoreTrailingSlash: true,
    });

    emit("http:listen", {
        port: 8080,
    });
};

main().catch(console.error);
