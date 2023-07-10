/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

class CylindricalContainer {
  #radius = 0;
  #height=0;
  #diameter = this.#radius * 2;
  static #description = "This is all about the different computations to be applied on a cylinder!";

  constructor(radius, height) {
    this.#radius = radius;
    this.#height = height;
    this.#diameter = this.#radius * 2;
  }

  static get description() {
    return CylindricalContainer.#description
  }

  get radius() {return this.#radius}
  set radius(r) {this.#radius = r}

  get diameter() { return this.#diameter }

  get height() {return this.#height}
  set height(l) {this.#height = l}

  differenceInMeasurements(that) {
    return new CylindricalContainer(Math.abs(this.#radius - that.#radius), Math.abs(this.#height - that.#height))
  }

  static difference(a, b) {return a.differenceInMeasurements(b)}

  equals(that) {
    return that instanceof CylindricalContainer && this.#radius === that.#radius && this.#height === that.#height
  }

  toString() {
    return `Radius: ${this.radius}\nLength: ${this.height}`
  }
}

// Adding methods to existing classes
CylindricalContainer.prototype.surfaceArea = (function() {
  return (function(openOrClosedOrTwoSidesOpen) {
    console.log(`Is CylindricalContainer this : ${this instanceof CylindricalContainer}`)
    let circleArea = Math.PI * (this.radius ** 2);
    let curvedSurface = Math.PI * this.diameter * this.height;
    let formulaOpen = circleArea + curvedSurface
    let formulaClose = (2 * circleArea) +  curvedSurface
    switch(openOrClosedOrTwoSidesOpen) {
      case 'o':
        return Math.ceil(formulaOpen)
      case 'c':
        return Math.ceil(formulaClose)
      case 'b':
        return Math.ceil(curvedSurface)
      default:
        return "Case unknown! Please use 'o' for open on one circular base, 'b' for both open circular bases and 'c' for closed circular bases"
    }
  });
})();

console.log(CylindricalContainer.description)
let cylinder = new CylindricalContainer(7, 10);
console.log(cylinder.height);
console.log(cylinder.radius);
console.log('The surface area of the cylinder is : ' + cylinder.surfaceArea('o') + ' units squared.');
let cylinder2 = new CylindricalContainer(14, 30);
console.log(CylindricalContainer.difference(cylinder, cylinder2).toString());
console.log(cylinder.equals(cylinder2));

