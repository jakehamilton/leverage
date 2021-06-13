const { add, emit } = require("@leverage/core");
const { http } = require("@leverage/plugin-http");
const { websocket } = require("@leverage/plugin-websocket");
const requireDirAll = require("require-dir-all");

const main = async () => {
    const routes = [];
    const websockets = [];

    requireDirAll("./routes", {
        recursive: true,
        map: ({ exports }) => routes.push(exports),
    });

    requireDirAll("./websockets", {
        recursive: true,
        map: ({ exports }) => websockets.push(exports),
    });

    add(http, websocket, ...routes, ...websockets);

    emit("http:configure", {
        ignoreTrailingSlash: true,
    });

    emit("websocket:attach");

    emit("http:listen", {
        port: 8080,
    });
};

main().catch(console.error);
