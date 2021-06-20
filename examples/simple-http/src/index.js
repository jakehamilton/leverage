const { add, emit, once } = require("@leverage/core");
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

    process.on("SIGINT", () => {
        once("http:closed", () => {
            process.exit(0);
        });

        emit("http:close");
    });
};

main().catch(console.error);
