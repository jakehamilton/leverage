const {
    useConfig,
    useKeyRef,
    useEvent,
    useEmitter,
} = require("@leverage/core");
const Fastify = require("fastify");
const middie = require("middie");

const log = require("./log");

const routeHandlerKeys = [
    "onRequest",
    "preParsing",
    "preValidation",
    "preHandler",
    "preSerialization",
    "onSend",
    "onResponse",
    "handler",
    "errorHandler",
    "validatorCompiler",
    "serializerCompiler",
    "schemaErrorFormatter",
];

const routeMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT",
    "OPTIONS",
];

const useFastify = () => {
    const fastifyRef = useKeyRef("fastify");

    return fastifyRef.current;
};

const init = () => {
    useConfig({
        is: "plugin",
        type: "http",
    });

    const emitter = useEmitter();

    const fastifyRef = useKeyRef("fastify", null);
    const fastifyConfigRef = useKeyRef("fastifyConfig", {});
    const fastifyPluginsRef = useKeyRef("fastifyPlugins", []);

    const routesRef = useKeyRef("routes", []);
    const middlewareRef = useKeyRef("middleware", []);

    const isConfiguredRef = useKeyRef("isConfigured", false);

    const listenConfigRef = useKeyRef("port", null);

    const configure = async () => {
        const fastify = Fastify(fastifyConfigRef.current);

        await fastify.register(middie);

        for (const fastifyPlugin of fastifyPluginsRef.current) {
            await fastify.register(fastifyPlugin);
        }

        fastifyRef.current = fastify;
    };

    useEvent("http:configure", async (config) => {
        fastifyConfigRef.current = config;

        await configure();

        isConfiguredRef.current = true;

        emitter.emit("http:configured");
    });

    useEvent("http:configured", () => {
        const fastify = fastifyRef.current;

        for (const component of middlewareRef.current) {
            const config = useConfig(component);

            if (config.http.path) {
                fastify.use(config.http.path, component.middleware);
            } else {
                fastify.use(component.middleware);
            }
        }

        for (const component of routesRef.current) {
            const config = useConfig(component);
            fastify.route({
                ...config.http,
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
        }
    });

    useEvent("http:listen", (data) => {
        log.info({
            event: "http:listen",
            ...data,
        });

        const listen = () => {
            listenConfigRef.current = data;
            fastifyRef.current.listen(data, () => {
                log.info({
                    emit: "http:listening",
                    ...data,
                });

                emitter.emit("http:listening", data);
            });
        };

        if (fastifyRef.current) {
            listen();
        } else {
            emitter.once("http:configured", () => {
                listen();
            });
        }
    });

    useEvent("http:close", async () => {
        log.info({
            event: "http:close",
        });

        if (fastifyRef.current) {
            await fastifyRef.current.close();
        }

        log.info({
            event: "http:closed",
        });

        emitter.emit("http:closed");
    });
};

const install = (component) => {
    const config = useConfig(component);
    const fastifyRef = useKeyRef("fastify");
    const routesRef = useKeyRef("routes");
    const middlewareRef = useKeyRef("middleware");
    const isConfiguredRef = useKeyRef("isConfigured");

    if (component.middleware) {
        if (isConfiguredRef.current) {
            if (config.http.path) {
                fastifyRef.current.use(config.http.path, component.middleware);
            } else {
                fastifyRef.current.use(component.middleware);
            }
        }

        middlewareRef.current.push(component);
    }

    if (routeHandlerKeys.some((key) => component[key])) {
        let isValid = true;

        if (!config.http.method) {
            isValid = false;
            log.error(
                "Could not install component handler without config.http.method."
            );
        }

        if (Array.isArray(config.http.method)) {
            if (
                config.http.method.some(
                    (method) => !routeMethods.includes(method)
                )
            ) {
                isValid = false;
                const invalidMethods = config.http.method.filter(
                    (method) => !routeMethods.includes(method)
                );

                for (const method of invalidMethods) {
                    log.error(`No method "${method}" exists for app.`);
                }
            }
        } else if (!routeMethods.includes(config.http.method)) {
            isValid = false;
            log.error(`No method "${config.http.method}" exists for app.`);
        }

        if (!config.http.path) {
            isValid = false;
            log.error(
                "Could not install component handler without config.http.path."
            );
        }

        if (isValid) {
            if (isConfiguredRef.current) {
                fastifyRef.current.route({
                    ...config.http,
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
            }

            routesRef.current.push(component);
        }
    }
};

module.exports = {
    init,
    install,
    useFastify,
};
