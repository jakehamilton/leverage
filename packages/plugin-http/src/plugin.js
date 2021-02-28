const { useConfig, useKeyRef, useSignal, useUnit } = require("@leverage/core");
const fastify = require("fastify");
const littlelog = require("@littlethings/log");

const log = require("./log");
const { getVerbosity } = require("@littlethings/log");
const { getLevelFromNumber } = require("@littlethings/log/src/util");

const useApp = () => {
    return useKeyRef("app").current;
};

const _addComponent = (component) => {
    const app = useApp();
    const { http } = useConfig(component);

    log.debug({ status: "installing", component: http });

    app.route({
        ...http,
        onRequest: component.onRequest,
        preParsing: component.preParsing,
        preValidation: component.preValidation,
        preHandler: component.preHandler,
        preSerialization: component.preSerialization,
        onSend: component.onSend,
        onResponse: component.onResponse,
        handler: component.handler,
        errorHandler: component.errorHandler,
        validatorCompiler: component.validatorCompiler,
        serializerCompiler: component.serializerCompiler,
        schemaErrorFormatter: component.schemaErrorFormatter,
    });
};

const _addMiddleware = (middleware) => {
    const app = useApp();

    log.debug({
        status: "installing",
        middleware: {
            path: middleware.path ? middleware.path : "*",
            name: middleware.name,
        },
    });

    if (middleware.path) {
        app.use(middleware.path, middleware.handler);
    } else {
        app.use(middleware.handler);
    }
};

const initApp = async (config = {}) => {
    const self = useUnit();
    const appRef = useKeyRef("app");
    const readyRef = useKeyRef("ready", false);
    const waitingRoutesRef = useKeyRef("waitingRoutes");
    const waitingMiddlewareRef = useKeyRef("waitingMiddleware");

    appRef.current = fastify({
        level: getLevelFromNumber(
            getVerbosity(
                process.env.LOG_LEVEL
                    ? process.env.LOG_LEVEL.toUpperCase()
                    : "INFO"
            )
        ).toLowerCase(),
        ...config,
    });

    await appRef.current.register(require("middie"));

    readyRef.current = true;

    if (waitingRoutesRef.current.length > 0) {
        for (const component of waitingRoutesRef.current) {
            self._addComponent(component);
        }

        waitingRoutesRef.current.length = 0;
    }

    if (waitingMiddlewareRef.current.length > 0) {
        for (const middleware of waitingMiddlewareRef.current) {
            self._addMiddleware(middleware);
        }

        waitingMiddlewareRef.current.length = 0;
    }
};

const init = () => {
    useConfig({
        is: "plugin",
        type: "http",
    });

    const appRef = useKeyRef("app", null);
    useKeyRef("ready", false);
    useKeyRef("waitingRoutes", []);
    useKeyRef("waitingMiddleware", []);

    useSignal(async ({ type, payload }) => {
        if (type === "listen") {
            if (!appRef.current) {
                await initApp();
            }

            appRef.current.listen(payload, (error, address) => {
                if (error) {
                    log.error(error);
                }

                log.info({ status: "listening", address });
            });
        } else if (type === "configure") {
            await initApp(payload);
        }
    });
};

const install = (component) => {
    const config = useConfig(component);

    if (config.http === undefined) {
        // this component is just middleware or configuration, no install needed
        return;
    }

    const readyRef = useKeyRef("ready");

    if (readyRef.current === false) {
        const waitingRoutesRef = useKeyRef("waitingRoutes");

        log.debug({ status: "waiting", component: config.http });

        waitingRoutesRef.current.push(component);
    } else {
        _addComponent(app, component);
    }
};

const useMiddleware = (path, handler, name = "anonymous") => {
    const data = {
        path: undefined,
        handler: undefined,
        name: undefined,
    };

    if (typeof path === "function") {
        // useMiddleware(handler, "my-name")
        data.handler = path;
        data.name = handler || name;
    } else {
        // useMiddleware("/path", handler, "my-name")
        data.path = path;
        data.handler = handler;
        data.name = name;
    }

    const readyRef = useKeyRef("ready");

    if (readyRef.current === false) {
        const waitingMiddlewareRef = useKeyRef("waitingMiddleware");

        log.debug({
            status: "waiting",
            middleware: {
                path: data.path ? data.path : "*",
                name: data.name,
            },
        });

        waitingMiddlewareRef.current.push(data);
    } else {
        _addMiddleware(data);
    }
};

module.exports = {
    init,
    install,
    useApp,
    useMiddleware,
    _addComponent,
    _addMiddleware,
};
