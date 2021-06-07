import CharacterMath from './math';

export default class Daemon extends CharacterMath {
  constructor(name) {
    super(name);
    this.attack = 100;
    this.defence = 40;
    this.stoned = false;
    Object.defineProperty(this, 'type', {
      enumerable: true,
      configurable: false,
      writable: false,
      value: 'Daemon',
    });
  }
}
