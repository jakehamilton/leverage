import { Component, ComponentUnit } from '../component';

describe('Component', () => {
    test('sets the `is` property', () => {
        const component = new Component({
            type: 'xyz',
        });

        expect(component.is).toEqual('component');
    });

    test('is a class', () => {
        expect(typeof Component).toBe('function');
    });

    test('can be extended', () => {
        expect(() => {
            class C extends Component implements ComponentUnit {
                type = 'xyz';
            }

            const component = new C();

            expect(component.is).toEqual('component');
            expect(component.type).toEqual('xyz');
        }).not.toThrow();

        expect(() => {
            class C extends Component implements ComponentUnit {
                constructor () {
                    super({
                        type: 'xyz',
                    });
                }
            }

            const component = new C();

            expect(component.is).toEqual('component');
            expect(component.type).toEqual('xyz');
        }).not.toThrow();
    });
});
