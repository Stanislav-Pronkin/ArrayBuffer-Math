import CharacterMath from './math';

export default class Magician extends CharacterMath {
  constructor(name) {
    super(name);
    this.attack = 150;
    this.defence = 40;
    this.stoned = false;
    Object.defineProperty(this, 'type', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 'Magician',
    });
  }
}
