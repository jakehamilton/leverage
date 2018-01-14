import Middleware from '../middleware';

import { MiddlewareConfig } from '../../types/middleware';

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
    expect(() => {
        Middleware((() => null) as any);
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
    class TestComponent {}

    const instance: any = new TestComponent();

    expect(instance.config.is).toBe('middleware');
    expect(instance.config.type).toEqual(config.type);

    expect(instance.config.xyz).toBeDefined();
    expect(instance.config.xyz.a).toEqual(config.xyz.a);
});
