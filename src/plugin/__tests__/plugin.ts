import Plugin from '../plugin';

import { PluginConfig } from '../../../types/plugin';

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
    expect(() => {
        Plugin((() => null) as any);
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
    class TestPlugin {}

    const instance: any = new TestPlugin();

    expect(instance.config.is).toBe('plugin');
    expect(instance.config.type).toEqual(config.type);

    expect(instance.config.xyz).toBeDefined();
    expect(instance.config.xyz.a).toEqual(config.xyz.a);
});
