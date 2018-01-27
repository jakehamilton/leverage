import Service from '../service';

import { ServiceConfig } from '../../../types/service';
import { EmptyUnit } from '../../../types/leverage';

describe('Service', () => {
    test('is a function', () => {
        expect(typeof Service).toBe('function');
    });

    test('takes valid config', () => {
        /*
        * Object config
        */
        expect(() => {
            Service({
                name: 'xyz',
                xyz: {},
            });
        }).not.toThrow();
    });

    test('rejects an invalid config', () => {
        /*
        * Forgot `name`
        */
        expect(() => {
            Service({
                xyz: {},
            } as any);
        }).toThrow();

        /*
        * Invalid `name` value
        */
        expect(() => {
            Service({
                name: {},
            } as any);
        }).toThrow();
        expect(() => {
            Service({
                name: false,
            } as any);
        }).toThrow();

        /*
        * Invalid config name
        */
        expect(() => {
            Service(true as any);
        }).toThrow();
        expect(() => {
            Service(42 as any);
        }).toThrow();
        expect(() => {
            Service('leverage' as any);
        }).toThrow();
    });

    test('can extend a class', () => {
        const config: ServiceConfig = {
            name: 'xyz',
            xyz: {
                a: 'a',
            },
        };

        @Service(config)
        class TestService implements EmptyUnit {}

        const instance: any = new TestService();

        expect(instance.is).toBe('service');
        expect(instance.config.name).toEqual(config.name);

        expect(instance.config.xyz).toBeDefined();
        expect(instance.config.xyz.a).toEqual(config.xyz.a);
    });

    test('can be inherited', () => {
        class TestService extends (Service as any) {}

        const instance: any = new TestService();

        expect(instance.is).toBe('service');
    });

    test('can be used as a minimal decorator', () => {
        @Service
        class TestService implements EmptyUnit {}

        const instance: any = new TestService();

        expect(instance.is).toBe('service');
    });
});
