import { Middleware } from '../middleware';

import { MiddlewareConfig } from '..';

describe('Middleware', () => {
    test('is a function', () => {
        expect(typeof Middleware).toBe('function');
    });

    test('takes valid config', () => {
        /*
        * Object config
        */
        expect(() => {
            Middleware({
                type: 'xyz',
                xyz: {},
            });
        }).not.toThrow();
    });

    test('rejects an invalid config', () => {
        /*
        * Forgot `type`
        */
        expect(() => {
            Middleware({
                xyz: {},
            } as any);
        }).toThrow();

        /*
        * Invalid `type` value
        */
        expect(() => {
            Middleware({
                type: {},
            } as any);
        }).toThrow();
        expect(() => {
            Middleware({
                type: false,
            } as any);
        }).toThrow();

        /*
        * Invalid config type
        */
        expect(() => {
            Middleware(true as any);
        }).toThrow();
        expect(() => {
            Middleware(42 as any);
        }).toThrow();
        expect(() => {
            Middleware('leverage' as any);
        }).toThrow();
    });

    test('can extend a class', () => {
        const config: MiddlewareConfig = {
            type: 'xyz',
            xyz: {
                a: 'a',
            },
        };

        @Middleware(config)
        class TestMiddleware {}

        const instance: any = new TestMiddleware();

        expect(instance.is).toBe('middleware');
        expect(instance.config.type).toEqual(config.type);

        expect(instance.config.xyz).toBeDefined();
        expect(instance.config.xyz.a).toEqual(config.xyz.a);
    });

    test('can be inherited', () => {
        class TestMiddleware extends (Middleware as any) {}

        const instance: any = new TestMiddleware();

        expect(instance.is).toBe('middleware');
    });

    test('can be used as a minimal decorator', () => {
        @Middleware
        class TestMiddleware {}

        const instance: any = new TestMiddleware();

        expect(instance.is).toBe('middleware');
    });
});
