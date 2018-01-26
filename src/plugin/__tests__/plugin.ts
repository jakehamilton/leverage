import Plugin from '../plugin';

import { PluginConfig, PluginUnit } from '../../../types/plugin';
import { EmptyUnit } from '../../../types/leverage';
import { Component } from '../../index';

describe('Plugin', () => {
    test('is a function', () => {
        expect(typeof Plugin).toBe('function');
    });

    test('takes valid config', () => {
        /*
        * Object config
        */
        expect(() => {
            Plugin({
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
            Plugin({
                xyz: {},
            } as any);
        }).toThrow();

        /*
        * Invalid `type` value
        */
        expect(() => {
            Plugin({
                type: {},
            } as any);
        }).toThrow();
        expect(() => {
            Plugin({
                type: false,
            } as any);
        }).toThrow();

        /*
        * Invalid config type
        */
        expect(() => {
            Plugin(true as any);
        }).toThrow();
        expect(() => {
            Plugin(42 as any);
        }).toThrow();
        expect(() => {
            Plugin('leverage' as any);
        }).toThrow();
    });

    test('can extend a class', () => {
        const config: PluginConfig = {
            type: 'xyz',
            xyz: {
                a: 'a',
            },
        };

        @Plugin(config)
        class TestPlugin implements EmptyUnit {}

        const instance: any = new TestPlugin();

        expect(instance.is).toBe('plugin');
        expect(instance.config.type).toEqual(config.type);

        expect(instance.config.xyz).toBeDefined();
        expect(instance.config.xyz.a).toEqual(config.xyz.a);
    });

    test('can be inherited', () => {
        class TestPlugin extends (Plugin as any) {}

        const instance: any = new TestPlugin();

        expect(instance.is).toBe('plugin');
    });

    test('can be used as a minimal decorator', () => {
        @Plugin
        class TestPlugin {}

        const instance: any = new TestPlugin();

        expect(instance.is).toBe('plugin');
    });
});
