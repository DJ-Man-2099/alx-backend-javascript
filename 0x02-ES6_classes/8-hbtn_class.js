export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a Number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a String');
    }
    this._location = location;
  }

  [Symbol.toPrimitive](classType) {
    if (classType === 'number') {
      return this.size;
    }
    if (classType === 'string') {
      return this.location;
    }
    return null;
  }
}
