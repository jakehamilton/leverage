import Manager from '../manager';
import { ComponentInstanceWithDependencies } from '../../../types/component';
import { PluginInstanceWithDependencies } from '../../../types/plugin';
import { ServiceInstanceWithDependencies } from '../../../types/service';
import { MiddlewareInstanceWithDependencies } from '../../../types/middleware';

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
                        plugins: ['x'],
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
    });

    describe('#addMiddleware', () => {
        test('can add a middleware instance', () => {
            const unit: MiddlewareInstanceWithDependencies = {
                is: 'middleware',
                config: {
                    type: 'x',
                    dependencies: {
                        plugins: ['x'],
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
    });

    describe('#add', () => {
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

        test('install order: plugin -> component -> service', () => {
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
                        services: ['a'],
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

            expect((manager as any).components.waiting.services.a[0]).toBe(component);
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(service);
            }).not.toThrow();

            expect((manager as any).services.installed.a).toBe(service);

            expect((manager as any).components.installed.x[0]).toBe(component);
            expect(plugin.x.mock.calls.length).toBe(1);
        });

        test('install order: component -> service -> plugin', () => {
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
                        services: ['a'],
                    },
                },
            };

            const service = {
                is: 'service',
                config: {
                    name: 'a',
                    dependencies: {
                        plugins: ['x'],
                    },
                },
            };

            expect(() => {
                manager.add(component);
            }).not.toThrow();

            expect((manager as any).components.waiting.plugins.x[0]).toBe(component);
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(service);
            }).not.toThrow();

            expect((manager as any).services.waiting.plugins.x).not.toBeUndefined();
            expect(plugin.x.mock.calls.length).toBe(0);

            expect(() => {
                manager.add(plugin);
            }).not.toThrow();

            expect((manager as any).plugins.installed.x).toBe(plugin);

            expect(plugin.x.mock.calls.length).toBe(1);
            expect((manager as any).components.installed.x[0]).toBe(component);
        });
    });
});
