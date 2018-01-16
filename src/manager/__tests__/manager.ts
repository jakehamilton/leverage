import Manager from '../manager';
import { Component, Plugin } from '../../index';

/*
 * Accept functions as units
 */
test('creates unit instances', () => {
    expect(() => {
        const manager = new Manager();

        @Component({
            type: 'xyz',
        })
        class C {}

        manager.add(C);
    }).not.toThrow();

    expect(() => {
        const manager = new Manager();

        @Plugin({
            type: 'xyz',
        })
        class P {
            // tslint:disable-next-line:no-empty
            xyz () {}
        }

        manager.add(P);
    }).not.toThrow();
});

/*
 * Generic, bad units
 */
test('rejects invalid units', () => {
    /*
     * Not a unit type
     */
    expect(() => {
        const manager = new Manager();

        manager.add((true as any));
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        manager.add((42 as any));
    }).toThrow();

    /*
     * No config
     */
    expect(() => {
        const manager = new Manager();

        const unit = {};

        manager.add(unit);
    }).toThrow();

    /*
     * Invalid config value
     */
    expect(() => {
        const manager = new Manager();

        const unit = {
            config: true,
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: 42,
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: () => null,
        };

        manager.add(unit);
    }).toThrow();

    /*
     * No `is` value
     */
    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {},
        };

        manager.add(unit);
    }).toThrow();

    /*
     * Invalid `is` value
     */
    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: '',
            },
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: 'does-not-exist',
            },
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: true,
            },
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: 42,
            },
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: () => null,
            },
        };

        manager.add(unit);
    }).toThrow();

    expect(() => {
        const manager = new Manager();

        const unit = {
            config: {
                is: {},
            },
        };

        manager.add(unit);
    }).toThrow();

    /*
     * No `type` on instance config
     */
    expect(() => {
        const manager = new Manager();

        class C {
            constructor () {
                (this as any).config = {
                    is: 'component',
                };
            }
        }

        manager.add(C);
    }).toThrow();

    /*
     * Invalid `type` on instance config
     */
    expect(() => {
        const manager = new Manager();

        class C {
            constructor () {
                (this as any).config = {
                    is: 'component',
                    type: {},
                };
            }
        }

        manager.add(C);
    }).toThrow();

    /*
     * Invalid `type` on instance config
     */
    expect(() => {
        const manager = new Manager();

        class C {
            constructor () {
                (this as any).config = {
                    is: 'component',
                    type: 42,
                };
            }
        }

        manager.add(C);
    }).toThrow();
});

/*
 * Components
 */
test('can add a valid component', () => {
    const unit = {
        config: {
            is: 'component',
            type: 'xyz',
        },
    };

    /*
     * Add without throwing
     */
    expect(() => {
        const manager = new Manager();

        manager.add(unit);
    }).not.toThrow();

    /*
     * Verify the unit was added to waiting when no plugin exists
     */
    expect(() => {
        const manager = new Manager();

        manager.add(unit);

        expect(manager.__components__.__waiting__.plugins[unit.config.type]).toBeDefined();
        expect(manager.__components__.__waiting__.plugins[unit.config.type][0]).toEqual(unit);
    }).not.toThrow();
});

/*
 * Plugins
 */
test('can add a valid plugin', () => {
    const unit = {
        config: {
            is: 'plugin',
            type: 'xyz',
        },
        xyz: () => null,
    };

    /*
     * Add without throwing
     */
    expect(() => {
        const manager = new Manager();

        manager.add(unit);
    }).not.toThrow();

    /*
     * Verify the unit was added to the plugin map
     */
    expect(() => {
        const manager = new Manager();

        manager.add(unit);

        expect(manager.__plugins__[unit.config.type]).toBeDefined();
        expect(manager.__plugins__[unit.config.type]).toEqual(unit);
    }).not.toThrow();
});

/*
 * Unit Composition
 */
test('can add components + plugins', () => {
    expect(() => {
        const manager = new Manager();

        const callback = jest.fn();

        const component = {
            config: {
                is: 'component',
                type: 'x',
            },
            x: callback,
        };

        const plugin = {
            config: {
                is: 'plugin',
                type: 'x',
            },
            x: instance => {
                instance.x();
            },
        };

        manager.add(plugin, component);

        expect(callback.mock.calls.length).toBe(1);
    }).not.toThrow();

    expect(() => {
        const manager = new Manager();

        const callback = jest.fn();

        const component = {
            config: {
                is: 'component',
                type: 'x',
            },
            x: callback,
        };

        const plugin = {
            config: {
                is: 'plugin',
                type: 'x',
            },
            x: instance => {
                instance.x();
            },
        };

        manager.add(component, plugin, component);
    }).not.toThrow();
});

test('plugins can depend on plugins', () => {
    expect(() => {
        const manager = new Manager();

        const plugin1 = {
            config: {
                is: 'plugin',
                type: 'x',
                dependencies: {
                    plugins: ['y'],
                },
            },
            x (instance) {
                expect(this.plugins.y).toBe(plugin2);
            },
        };

        const plugin2 = {
            config: {
                is: 'plugin',
                type: 'y',
            },
            y: () => null,
        };

        const component = {
            config: {
                is: 'component',
                type: 'x',
            },
            x: () => null,
        };

        manager.add(component, plugin1, plugin2, component);
    }).not.toThrow();
});
