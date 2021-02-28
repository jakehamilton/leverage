const { useConfig, useInstallEffect, usePlugin } = require("@leverage/core");

const useHTTP = (config) => {
    useConfig({
        is: "component",
        type: "http",
        http: config,
    });
};

const useMiddleware = (path, middleware) => {
    useInstallEffect(() => {
        const { useMiddleware } = usePlugin("http");

        useMiddleware(path, middleware);
    });
};

module.exports = {
    useHTTP,
    useMiddleware,
};
