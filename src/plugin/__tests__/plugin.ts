import { Plugin, PluginUnit } from '../plugin';

describe('Plugin', () => {
    test('sets the `is` property', () => {
        const plugin = new Plugin({
            type: 'xyz',
        });

        expect(plugin.is).toEqual('plugin');
    });

    test('is a function', () => {
        expect(typeof Plugin).toBe('function');
    });

    test('can be extended', () => {
        expect(() => {
            class P extends Plugin implements PluginUnit {
                type = 'xyz';
            }

            const plugin = new P();

            expect(plugin.is).toEqual('plugin');
            expect(plugin.type).toEqual('xyz');
        }).not.toThrow();

        expect(() => {
            class P extends Plugin implements PluginUnit {
                constructor () {
                    super({
                        type: 'xyz',
                    });
                }
            }

            const plugin = new P();

            expect(plugin.is).toEqual('plugin');
            expect(plugin.type).toEqual('xyz');
        }).not.toThrow();
    });
});
