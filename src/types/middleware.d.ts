interface MiddlewareConfig {
    is?: 'middleware';
    type: string | string[];

    [name: string]: any;
}

interface MiddlewareUnit {
    [key: string]: any;
}

declare function Middleware (MiddlewareConfig):
    <T extends MiddlewareUnit>(middleware: T) => void;

export default Middleware;

export {
    Middleware,
    MiddlewareUnit,
    MiddlewareConfig,
};
