import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // cloneCar() {
  //   return new this.constructor();
  // }
  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
