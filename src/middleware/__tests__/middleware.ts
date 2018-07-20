import { Middleware, MiddlewareUnit } from '../middleware';

describe('Middleware', () => {
    test('sets the `is` property', () => {
        const middleware = new Middleware({
            type: 'xyz',
        });

        expect(middleware.is).toEqual('middleware');
    });

    test('is a class', () => {
        expect(typeof Middleware).toBe('function');
    });

    test('can be extended', () => {
        expect(() => {
            class M extends Middleware implements MiddlewareUnit {
                type = 'xyz';
            }

            const middleware = new M();

            expect(middleware.is).toEqual('middleware');
            expect(middleware.type).toEqual('xyz');
        }).not.toThrow();

        expect(() => {
            class M extends Middleware implements MiddlewareUnit {
                constructor () {
                    super({
                        type: 'xyz',
                    });
                }
            }

            const middleware = new M();

            expect(middleware.is).toEqual('middleware');
            expect(middleware.type).toEqual('xyz');
        }).not.toThrow();
    });
});
