import { Service, ServiceUnit } from '../service';

describe('Service', () => {
    test('sets the `is` property', () => {
        const service = new Service({
            name: 'xyz',
        });

        expect(service.is).toEqual('service');
    });

    test('is a class', () => {
        expect(typeof Service).toBe('function');
    });

    test('can be extended', () => {
        expect(() => {
            class S extends Service implements ServiceUnit {
                name = 'xyz';
            }

            const service = new S();

            expect(service.is).toEqual('service');
            expect(service.name).toEqual('xyz');
        }).not.toThrow();

        expect(() => {
            class S extends Service implements ServiceUnit {
                constructor () {
                    super({
                        name: 'xyz',
                    });
                }
            }

            const service = new S();

            expect(service.is).toEqual('service');
            expect(service.name).toEqual('xyz');
        }).not.toThrow();
    });
});
