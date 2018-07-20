import { Manager } from '../manager';
import { ComponentInstance, ComponentUnit } from '../../component';
import { PluginInstance, PluginUnit } from '../../plugin';
import { ServiceInstance, ServiceUnit } from '../../service';
import { MiddlewareInstance, MiddlewareUnit } from '../../middleware';
import { Component } from '../..';

describe('Manager', () => {
    let manager: Manager;

    beforeEach(() => {
        manager = new Manager();
    });

    test('tracks installed plugins', () => {
        expect((manager as any).plugins).not.toBeUndefined();
    });

    test('tracks installed services', () => {
        expect((manager as any).services).not.toBeUndefined();
    });

    test('tracks installed components', () => {
        expect((manager as any).components).not.toBeUndefined();
    });

    test('tracks installed middleware', () => {
        expect((manager as any).middleware).not.toBeUndefined();
    });

    describe('#addComponent', () => {
        test('can add a component instance', () => {
            const unit: ComponentInstance = {
                is: 'component',
                type: 'x',
                config: {
                    x: {},
                    dependencies: {
                        plugins: [
                            'x',
                        ],
                        services: [],
                    },
                },
                plugins: {},
                services: {},
                // tslint:disable-next-line:no-empty
                x () {},
            };

            /*
             * Errors shouldn't be thrown on valid instances
             */
            expect(() => {
                manager.addComponent(unit);
            }).not.toThrow();

            /*
             * Should be waiting on the necessary plugin
             */
            expect((manager as any).components.waiting.plugins.x[0]).toBe(unit);
        });

        test('does not accept invalid "type" values', () => {
            expect(() => {
                manager.addComponent({} as any);
            }).toThrow();

            expect(() => {
                manager.addComponent({
                    type: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addComponent({
                    // tslint:disable-next-line:no-empty
                    type: () => {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addComponent({
                    type: {},
                } as any);
            }).toThrow();
        });
    });

    describe('#addPlugin', () => {
        test('can add a plugin instance', () => {
            const unit: PluginInstance = {
                is: 'plugin',
                type: 'x',
                config: {
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: {},
                services: {},
                // tslint:disable-next-line:no-empty
                x () {},
            };

            /*
             * Errors shouldn't be thrown on valid instances
             */
            expect(() => {
                manager.addPlugin(unit);
            }).not.toThrow();

            /*
             * Should be installed since no dependencies are needed
             */
            expect((manager as any).plugins.installed.x).toBe(unit);
        });

        test('does not accept invalid "type" types', () => {
            expect(() => {
                manager.addPlugin({} as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    type: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    // tslint:disable-next-line:no-empty
                    type: () => {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    // tslint:disable-next-line:no-empty
                    type: {},
                } as any);
            }).toThrow();
        });

        test('does not accept plugins without an install method', () => {
            expect(() => {
                manager.addPlugin({
                    type: 'x',
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    type: 'x',
                    x: true,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    type: 'x',
                    x: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    type: 'x',
                    x: {},
                } as any);
            }).toThrow();
        });
    });

    describe('#addService', () => {
        test('can add a service instance', () => {
            const unit: ServiceInstance = {
                is: 'service',
                name: 'x',
                config: {
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: {},
                services: {},
            };

            /*
             * Errors shouldn't be thrown on valid instances
             */
            expect(() => {
                manager.addService(unit);
            }).not.toThrow();

            /*
             * Should be installed since no dependencies are needed
             */
            expect((manager as any).services.installed.x).toBe(unit);
        });

        test('does not accept service instances with invalid "name" values', () => {
            expect(() => {
                manager.addService({} as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    name: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    name: true,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    // tslint:disable-next-line:no-empty
                    name: () => {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    name: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    name: [],
                } as any);
            }).toThrow();
        });

        test('does not accept service instances with the same name', () => {
            const serviceA: ServiceInstance = {
                is: 'service',
                name: 'a',
                config: {
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
            };

            const serviceB: ServiceInstance = {
                is: 'service',
                name: 'a',
                config: {
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
            };

            expect(() => {
                manager.addService(serviceA);
            }).not.toThrow();

            expect(() => {
                manager.addService(serviceA);
            }).toThrow();

            expect(() => {
                manager.addService(serviceB);
            }).toThrow();
        });
    });

    describe('#addMiddleware', () => {
        test('can add a middleware instance', () => {
            const unit: MiddlewareInstance = {
                is: 'middleware',
                type: 'x',
                config: {
                    dependencies: {
                        plugins: [
                            'x',
                        ],
                        services: [],
                    },
                },
                plugins: {},
                services: {},
            };

            /*
             * Errors shouldn't be thrown on valid instances
             */
            expect(() => {
                manager.addMiddleware(unit);
            }).not.toThrow();

            /*
             * Should be waiting on the necessary plugin
             */
            expect((manager as any).middleware.waiting.plugins.x[0]).toBe(unit);
        });

        test('does not accept middleware instances with invalid "type" values', () => {
            expect(() => {
                manager.addMiddleware({} as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    type: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    type: true,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    type: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    // tslint:disable-next-line:no-empty
                    type: () => {},
                } as any);
            }).toThrow();
        });
    });

    describe('#add', () => {
        test('can add a component unit', () => {
            const unit: ComponentUnit = {
                is: 'component',
                type: 'x',
                // tslint:disable-next-line:no-empty
                x () {},
            };

            /*
             * Errors shouldn't be thrown on valid units
             */
            expect(() => {
                manager.add(unit);
            }).not.toThrow();

            /*
             * Should be waiting on the necessary plugin
             */
            expect((manager as any).components.waiting.plugins.x[0]).toBe(unit);
        });

        test('can add a plugin unit', () => {
            const unit: PluginUnit = {
                is: 'plugin',
                type: 'x',
                // tslint:disable-next-line:no-empty
                x () {},
            };

            /*
             * Errors shouldn't be thrown on valid units
             */
            expect(() => {
                manager.add(unit);
            }).not.toThrow();

            /*
             * Should be installed since no dependencies are needed
             */
            expect((manager as any).plugins.installed.x).toBe(unit);
        });

        test('can add a service unit', () => {
            const unit: ServiceUnit = {
                is: 'service',
                name: 'x',
            };

            /*
             * Errors shouldn't be thrown on valid units
             */
            expect(() => {
                manager.add(unit);
            }).not.toThrow();

            /*
             * Should be installed since no dependencies are needed
             */
            expect((manager as any).services.installed.x).toBe(unit);
        });

        test('can add a middleware unit', () => {
            const unit: MiddlewareUnit = {
                is: 'middleware',
                type: 'x',
                // tslint:disable-next-line:no-empty
                x () {},
            };

            /*
             * Errors shouldn't be thrown on valid units
             */
            expect(() => {
                manager.add(unit);
            }).not.toThrow();

            /*
             * Should be waiting on the necessary plugin
             */
            expect((manager as any).middleware.waiting.plugins.x[0]).toBe(unit);
        });

        test('can add a unit constructor', () => {
            class Unit extends Component {}

            expect(() => {
                manager.add(Unit);
            }).not.toThrow();
        });

        test('does not accept invalid types', () => {
            expect(() => {
                manager.add(42 as any);
            }).toThrow();

            expect(() => {
                manager.add(true as any);
            }).toThrow();

            expect(() => {
                manager.add([]);
            }).toThrow();
        });

        test('does not accept invalid "is" values', () => {
            expect(() => {
                manager.add({});
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'tomato',
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 42,
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    // tslint:disable-next-line:no-empty
                    is: () => {},
                });
            }).toThrow();
        });

        test('does not accept invalid "config" types', () => {
            expect(() => {
                manager.add({
                    is: 'component',
                    type: 'xyz',
                    config: true,
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'component',
                    type: 'xyz',
                    config: 42,
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'component',
                    type: 'xyz',
                    config: 'tomato',
                });
            }).toThrow();
        });

        test('does not allow two plugins to share the same type', () => {
            const pluginA = {
                is: 'plugin',
                type: 'x',
                // tslint:disable-next-line:no-empty
                x () {},
            };

            const pluginB = {
                is: 'plugin',
                type: 'x',
                // tslint:disable-next-line:no-empty
                x () {},
            };

            expect(() => {
                manager.add(pluginA);
            }).not.toThrow();

            expect(() => {
                manager.add(pluginA);
            }).toThrow();

            expect(() => {
                manager.add(pluginB);
            }).toThrow();
        });

        test('install: plugin -> component -> service', () => {
            const plugin: PluginUnit = {
                is: 'plugin',
                type: 'x',
                x: jest.fn(),
            };

            const component: ComponentUnit = {
                is: 'component',
                type: 'x',
                config: {
                    dependencies: {
                        services: [
                            'a',
                        ],
                    },
                },
            };

            const service: ServiceUnit = {
                is: 'service',
                name: 'a',
            };

            expect(() => {
                manager.add(plugin);
            }).not.toThrow();

            expect((manager as any).plugins.installed.x).toBe(plugin);

            expect(() => {
                manager.add(component);
            }).not.toThrow();

            expect(
                (manager as any).components.waiting.services.a.includes(
                    component,
                ),
            ).toBe(true);
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(service);
            }).not.toThrow();

            expect((manager as any).services.installed.a).toBe(service);

            expect((manager as any).components.installed.x[0]).toBe(component);
            expect(plugin.x.mock.calls.length).toBe(1);
        });

        test('install: component -> service -> plugin', () => {
            const plugin: PluginUnit = {
                is: 'plugin',
                type: 'x',
                x: jest.fn(),
            };

            const component: ComponentUnit = {
                is: 'component',
                type: 'x',
                config: {
                    dependencies: {
                        services: [
                            'a',
                        ],
                    },
                },
            };

            const service: ServiceUnit = {
                is: 'service',
                name: 'a',
                config: {
                    dependencies: {
                        plugins: [
                            'x',
                        ],
                    },
                },
            };

            expect(() => {
                manager.add(component);
            }).not.toThrow();

            expect((manager as any).components.waiting.plugins.x[0]).toBe(
                component,
            );
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(service);
            }).not.toThrow();

            expect(
                (manager as any).services.waiting.plugins.x,
            ).not.toBeUndefined();
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(plugin);
            }).not.toThrow();

            expect((manager as any).plugins.installed.x).toBe(plugin);

            expect(plugin.x.mock.calls.length).toBe(1);
            expect((manager as any).components.installed.x[0]).toBe(component);
        });

        test('install: plugin -> plugin -> component', () => {
            const pluginA: PluginUnit = {
                is: 'plugin',
                type: 'x',
                config: {
                    dependencies: {
                        plugins: [
                            'y',
                        ],
                    },
                },
                x: jest.fn(),
            };

            const pluginB: PluginUnit = {
                is: 'plugin',
                type: 'y',
                y: jest.fn(),
            };

            const component: ComponentUnit = {
                is: 'component',
                type: [
                    'x',
                    'y',
                ],
            };

            expect(() => {
                manager.add(pluginA);
            }).not.toThrow();

            expect((manager as any).plugins.waiting.plugins.y[0]).toBe(pluginA);

            expect(() => {
                manager.add(pluginB);
            }).not.toThrow();

            expect(
                (manager as any).plugins.waiting.plugins.y[0],
            ).toBeUndefined();

            expect(pluginA.x.mock.calls.length).toBe(0);
            expect(pluginB.y.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(component);
            }).not.toThrow();
        });

        test('install: plugin -> service -> service', () => {
            const plugin: PluginUnit = {
                is: 'plugin',
                type: 'x',
                config: {
                    dependencies: {
                        services: [
                            'a',
                            'b',
                        ],
                    },
                },
                x: jest.fn(),
            };

            const serviceA: ServiceUnit = {
                is: 'service',
                name: 'a',
            };

            const serviceB: ServiceUnit = {
                is: 'service',
                name: 'b',
            };

            expect(() => {
                manager.add(plugin);
            }).not.toThrow();

            expect((manager as any).plugins.waiting.services.a[0]).toBe(plugin);

            expect(() => {
                manager.add(serviceA);
            }).not.toThrow();

            expect((manager as any).plugins.waiting.services.a[0]).toBe(plugin);

            expect(() => {
                manager.add(serviceB);
            }).not.toThrow();

            expect((manager as any).plugins.installed.x).toBe(plugin);
        });

        test('install: service -> service', () => {
            const serviceA: ServiceUnit = {
                is: 'service',
                name: 'a',
                config: {
                    dependencies: {
                        services: [
                            'b',
                        ],
                    },
                },
            };

            const serviceB: ServiceUnit = {
                is: 'service',
                name: 'b',
            };

            expect(() => {
                manager.add(serviceA);
            }).not.toThrow();

            expect(() => {
                manager.add(serviceB);
            }).not.toThrow();
        });

        test('install: middleware -> service -> plugin', () => {
            const plugin: PluginUnit = {
                is: 'plugin',
                type: 'x',
                x: jest.fn(),
                middleware: jest.fn(),
            };

            const service: ServiceUnit = {
                is: 'service',
                name: 'a',
            };

            const middleware: MiddlewareUnit = {
                is: 'middleware',
                type: 'x',
                config: {
                    dependencies: {
                        services: [
                            'a',
                        ],
                    },
                },
            };

            expect(() => {
                manager.add(middleware);
            }).not.toThrow();

            expect((manager as any).middleware.waiting.plugins.x[0]).toBe(
                middleware,
            );

            expect(() => {
                manager.add(plugin);
            }).not.toThrow();

            expect((manager as any).middleware.waiting.plugins.x[0]).toBe(
                middleware,
            );

            expect(() => {
                manager.add(service);
            }).not.toThrow();

            expect((manager as any).middleware.waiting.plugins.x[0]).not.toBe(
                middleware,
            );
        });
    });
});
