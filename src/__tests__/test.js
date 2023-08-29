import Validator from '../validator';

test('Validator test', () => {
  const validator = new Validator('Anna999FOREVER');

  expect(validator.validateUsername()).toBe(true);
});
