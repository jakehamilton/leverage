import Component from '../component';

import { ComponentConfig } from '../../../types/component';
import { EmptyUnit } from '../../../types/leverage';

describe('Component', () => {
    test('is a function', () => {
        expect(typeof Component).toBe('function');
    });

    test('takes valid config', () => {
        /*
        * Object config
        */
        expect(() => {
            Component({
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
            Component({
                xyz: {},
            } as any);
        }).toThrow();

        /*
        * Invalid `type` value
        */
        expect(() => {
            Component({
                type: {},
            } as any);
        }).toThrow();
        expect(() => {
            Component({
                type: false,
            } as any);
        }).toThrow();

        /*
        * Invalid config type
        */
        expect(() => {
            Component(true as any);
        }).toThrow();
        expect(() => {
            Component(42 as any);
        }).toThrow();
        expect(() => {
            Component('leverage' as any);
        }).toThrow();
        expect(() => {
            Component((() => null) as any);
        }).toThrow();
    });

    test('can extend a class', () => {
        const config: ComponentConfig = {
            type: 'xyz',
            xyz: {
                a: 'a',
            },
        };

        @Component(config)
        class TestComponent implements EmptyUnit {}

        const instance: any = new TestComponent();

        expect(instance.is).toBe('component');
        expect(instance.config.type).toEqual(config.type);

        expect(instance.config.xyz).toBeDefined();
        expect(instance.config.xyz.a).toEqual(config.xyz.a);
    });
});
