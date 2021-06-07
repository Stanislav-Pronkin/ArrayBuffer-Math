import Daemon from '../daemon';

test('Daemon', () => {
  const daemon = new Daemon('Bob');

  daemon.distance = 2;
  expect(daemon.attack).toEqual(90);
});

test('Daemon', () => {
  const daemon = new Daemon('Bob');

  daemon.distance = -1;
  expect(daemon.attack).toEqual(100);
});

test('Daemon', () => {
  const daemon = new Daemon('Bob');

  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toEqual(85);
});

test('Daemon', () => {
  const daemon = new Daemon('Bob');

  daemon.distance = 4;
  daemon.stoned = true;
  expect(daemon.attack).toEqual(60);
});
