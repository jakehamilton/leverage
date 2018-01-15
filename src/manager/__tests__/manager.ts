import Manager from '../manager';
import { Component, Plugin } from '../../index';

test('rejects invalid units', () => {
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
});

test('can add a component', () => {
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

test('can add a plugin', () => {
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

test('creates unit instances', () => {
    expect(() => {
        const manager = new Manager();

        @Component({
            type: 'xyz',
        })
        class C {}

        manager.add(C);
    }).not.toThrow();
});

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
                console.log('here');
                instance.x();
            },
        };

        manager.add(component, plugin);

        expect(callback.mock.calls.length).toBe(1);
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
        }

        manager.add(component, plugin1, plugin2);
    }).not.toThrow();
});
