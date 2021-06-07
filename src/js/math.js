export default class CharacterMath {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
  }

  get stoned() {
    return this.xstoned;
  }

  set stoned(stoned) {
    this.xstoned = stoned;
  }

  get attack() {
    const distanceActual = (this.distance <= 0) ? 1 : this.distance;
    const mainAttack = (this.xattack / 100) * (100 - (distanceActual - 1) * 10);

    if (this.stoned === true) {
      const attackStoned = mainAttack - Math.log2(distanceActual) * 5;
      return attackStoned;
    }
    return mainAttack;
  }

  set attack(attack) {
    this.xattack = attack;
  }
}
