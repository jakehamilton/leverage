const { useDependencies } = require("@leverage/core");
const { useConfig, useInstallEffect, usePlugin } = require("@leverage/core");

const useHTTP = (httpConfig = {}) => {
    const config = useConfig({
        is: "component",
        type: "http",
        http: httpConfig,
    });

    return config;
};

const useHTTPDependency = () => {
    useDependencies({
        plugins: ["http"],
    });
};

const useFastify = () => {
    const { useFastify } = usePlugin("http");

    return useFastify();
};

module.exports = {
    useHTTP,
    useHTTPDependency,
    useFastify,
};
