const { add, emit, emitter, remove, once } = require("@leverage/core");
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
        port: 8081,
    });

    process.on("SIGINT", () => {
        emit("http:close");
        once("http:closed", () => {
            process.exit(1);
        });
    });

    setTimeout(() => {
        console.log("removing component");
        remove(component);

        setTimeout(() => {
            console.log("adding component again");
            add(component);
        }, 5000);
    }, 5000);
};

main().catch(console.error);
