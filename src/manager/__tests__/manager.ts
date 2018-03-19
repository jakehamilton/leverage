import { Manager } from '../manager';
import { ComponentInstanceWithDependencies } from '../../component';
import { PluginInstanceWithDependencies } from '../../plugin';
import { ServiceInstanceWithDependencies } from '../../service';
import { MiddlewareInstanceWithDependencies } from '../../middleware';
import { Component } from '../..';

import * as requireAll from '../__mocks__/require-dir-all';

jest.mock('require-dir-all');

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
            const unit: ComponentInstanceWithDependencies = {
                is: 'component',
                config: {
                    type: 'x',
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

        test('does not accept invalid "type" types', () => {
            expect(() => {
                manager.addComponent({
                    config: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addComponent({
                    config: {
                        type: 42,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addComponent({
                    config: {
                        // tslint:disable-next-line:no-empty
                        type: () => {},
                    },
                } as any);
            }).toThrow();
        });
    });

    describe('#addPlugin', () => {
        test('can add a plugin instance', () => {
            const unit: PluginInstanceWithDependencies = {
                is: 'plugin',
                config: {
                    type: 'x',
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
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
                manager.addPlugin({
                    config: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        type: 42,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        // tslint:disable-next-line:no-empty
                        type: () => {},
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        // tslint:disable-next-line:no-empty
                        type: {},
                    },
                } as any);
            }).toThrow();
        });

        test('does not accept plugins without an install method', () => {
            expect(() => {
                manager.addPlugin({
                    config: {
                        type: 'x',
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        type: 'x',
                    },
                    x: true,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        type: 'x',
                    },
                    x: 42,
                } as any);
            }).toThrow();

            expect(() => {
                manager.addPlugin({
                    config: {
                        type: 'x',
                    },
                    x: {},
                } as any);
            }).toThrow();
        });
    });

    describe('#addService', () => {
        test('can add a service instance', () => {
            const unit: ServiceInstanceWithDependencies = {
                is: 'service',
                config: {
                    name: 'x',
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
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

        test('does not accept service instances with invalid "name" types', () => {
            expect(() => {
                manager.addService({
                    config: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    config: {
                        name: 42,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    config: {
                        name: true,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addService({
                    config: {
                        // tslint:disable-next-line:no-empty
                        name: () => {},
                    },
                } as any);
            }).toThrow();
        });

        test('does not accept service instances the same name', () => {
            const serviceA: ServiceInstanceWithDependencies = {
                is: 'service',
                config: {
                    name: 'a',
                    dependencies: {
                        plugins: [],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
            };

            const serviceB: ServiceInstanceWithDependencies = {
                is: 'service',
                config: {
                    name: 'a',
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
            const unit: MiddlewareInstanceWithDependencies = {
                is: 'middleware',
                config: {
                    type: 'x',
                    dependencies: {
                        plugins: [
                            'x',
                        ],
                        services: [],
                    },
                },
                plugins: [] as any,
                services: [] as any,
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

        test('does not accept middleware instances with invalid "type" types', () => {
            expect(() => {
                manager.addMiddleware({
                    config: {},
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    config: {
                        type: 42,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    config: {
                        type: true,
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    config: {
                        type: {},
                    },
                } as any);
            }).toThrow();

            expect(() => {
                manager.addMiddleware({
                    config: {
                        // tslint:disable-next-line:no-empty
                        type: () => {},
                    },
                } as any);
            }).toThrow();
        });
    });

    describe('#add', () => {
        test('can add a path', () => {
            const path = '/some/path';
            expect(() => {
                manager.add(path);
            }).not.toThrow();

            expect(requireAll.mock.calls.length).toBe(1);
            expect(requireAll.mock.calls[0][0]).toBe(path);

            expect((manager as any).plugins.installed.x).toBeDefined();
            expect((manager as any).services.installed.x).toBeDefined();
            expect((manager as any).middleware.installed.x).toBeDefined();
            expect((manager as any).components.installed.x).toBeDefined();
        });

        test('can add a component unit', () => {
            const unit = {
                is: 'component',
                config: {
                    type: 'x',
                },
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
            const unit = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
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
            const unit = {
                is: 'service',
                config: {
                    name: 'x',
                },
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
            const unit = {
                is: 'middleware',
                config: {
                    type: 'x',
                },
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
            @Component({
                type: 'x',
                x: {},
            })
            class Unit {}

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
                    config: {},
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 42,
                    config: {},
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    // tslint:disable-next-line:no-empty
                    is: () => {},
                    config: {},
                });
            }).toThrow();
        });

        test('does not accept invalid "config" types', () => {
            expect(() => {
                manager.add({
                    is: 'component',
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'component',
                    config: true,
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'component',
                    config: 42,
                });
            }).toThrow();

            expect(() => {
                manager.add({
                    is: 'component',
                    config: 'tomato',
                });
            }).toThrow();
        });

        test('does not allow two plugins to share the same type', () => {
            const pluginA = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
                // tslint:disable-next-line:no-empty
                x () {},
            };

            const pluginB = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
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
            const plugin = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
                x: jest.fn(),
            };

            const component = {
                is: 'component',
                config: {
                    type: 'x',
                    dependencies: {
                        services: [
                            'a',
                        ],
                    },
                },
            };

            const service = {
                is: 'service',
                config: {
                    name: 'a',
                },
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
            const plugin = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
                x: jest.fn(),
            };

            const component = {
                is: 'component',
                config: {
                    type: 'x',
                    dependencies: {
                        services: [
                            'a',
                        ],
                    },
                },
            };

            const service = {
                is: 'service',
                config: {
                    name: 'a',
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
            const pluginA = {
                is: 'plugin',
                config: {
                    type: 'x',
                    dependencies: {
                        plugins: [
                            'y',
                        ],
                    },
                },
                x: jest.fn(),
            };

            const pluginB = {
                is: 'plugin',
                config: {
                    type: 'y',
                },
                y: jest.fn(),
            };

            const component = {
                is: 'component',
                config: {
                    type: [
                        'x',
                        'y',
                    ],
                },
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
            const plugin = {
                is: 'plugin',
                config: {
                    type: 'x',
                    dependencies: {
                        services: [
                            'a',
                            'b',
                        ],
                    },
                },
                x: jest.fn(),
            };

            const serviceA = {
                is: 'service',
                config: {
                    name: 'a',
                },
            };

            const serviceB = {
                is: 'service',
                config: {
                    name: 'b',
                },
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
            const serviceA = {
                is: 'service',
                config: {
                    name: 'a',
                    dependencies: {
                        services: 'b',
                    },
                },
            };

            const serviceB = {
                is: 'service',
                config: {
                    name: 'b',
                },
            };

            expect(() => {
                manager.add(serviceA);
            }).not.toThrow();

            expect(() => {
                manager.add(serviceB);
            }).not.toThrow();
        });

        test('install: middleware -> service -> plugin', () => {
            const plugin = {
                is: 'plugin',
                config: {
                    type: 'x',
                },
                x: jest.fn(),
                middleware: jest.fn(),
            };

            const service = {
                is: 'service',
                config: {
                    name: 'a',
                },
            };

            const middleware = {
                is: 'middleware',
                config: {
                    type: 'x',
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
