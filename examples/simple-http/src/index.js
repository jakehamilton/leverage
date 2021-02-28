const { add, signal } = require("@leverage/core");
const { http } = require("@leverage/plugin-http");

const component = require("./component");
const middleware = require("./middleware");

const main = async () => {
    add(http, component, middleware);

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
