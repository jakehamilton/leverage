import * as Leverage from '..';
import {
  Manager,

  Plugin,
  Service,
  Component,
  Middleware,
} from '..';

test('can be imported', () => {
  /*
   * Default import
   */
  expect(Leverage).toBeDefined();

  /*
   * Named imports
   */
  expect(Manager).toBeDefined();
  expect(Plugin).toBeDefined();
  expect(Service).toBeDefined();
  expect(Component).toBeDefined();
  expect(Middleware).toBeDefined();
});
