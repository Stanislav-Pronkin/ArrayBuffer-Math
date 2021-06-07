import Magician from '../magician';

test('Magician', () => {
  const magician = new Magician('Bob');

  magician.distance = 2;

  expect(magician.attack).toBe(135);
});

test('Magician', () => {
  const magician = new Magician('Bob');

  magician.distance = 5;

  expect(magician.attack).toBe(90);
});

test('Magician', () => {
  const magician = new Magician('Bob');

  magician.distance = 2;
  magician.stoned = true;

  expect(magician.attack).toBe(130);
});
