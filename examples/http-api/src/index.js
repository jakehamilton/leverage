const { add, signal } = require("@leverage/core");
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

    await signal(
        { is: "plugin", type: "http" },
        {
            type: "configure",
            payload: {
                ignoreTrailingSlash: true,
            },
        }
    );

    await signal(
        {
            is: "plugin",
            type: "http",
        },
        {
            type: "listen",
            payload: 8080,
        }
    );
};

main().catch(console.error);
