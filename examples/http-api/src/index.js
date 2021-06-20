const { add, emit, once } = require("@leverage/core");
const { http } = require("@leverage/plugin-http");
const requireDirAll = require("require-dir-all");

const main = async () => {
    const routes = [];
    const services = [];
    const middleware = [];

    requireDirAll("./routes", {
        recursive: true,
        map: ({ exports }) => routes.push(exports),
    });

    requireDirAll("./services", {
        recursive: true,
        map: ({ exports }) => services.push(exports),
    });

    requireDirAll("./middleware", {
        recursive: true,
        map: ({ exports }) => middleware.push(exports),
    });

    add(http, ...middleware, ...services, ...routes);

    emit("http:configure", {
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
