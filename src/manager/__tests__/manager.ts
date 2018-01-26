import Manager from '../manager';
import { Component, Plugin, Service, Middleware } from '../../index';
import { EmptyUnit } from '../../../types/leverage';
import { ComponentUnit, ComponentInstanceWithDependencies } from '../../../types/component';
import { PluginUnit, PluginInstanceWithDependencies } from '../../../types/plugin';
import { ServiceInstanceWithDependencies } from '../../../types/service';

describe('Manager', () => {
    let manager: Manager;

    beforeEach(() => {
        manager = new Manager();
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
});
