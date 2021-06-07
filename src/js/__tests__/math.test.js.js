import CharacterMath from '../math';

test('CharacterMath', () => {
  const character = new CharacterMath('Bob', 'magician');

  expect(character).toEqual({ name: 'Bob', type: 'magician', distance: 1 });
});
