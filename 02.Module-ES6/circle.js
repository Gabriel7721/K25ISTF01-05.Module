const _radius = new WeakMap();

// NOTE: cách xuất file (export):

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius}`);
  }
}

// NOTE: cách xuất file (export):
// export default Circle;

export default class Square {
  constructor(parameters) {}
}

export const Oval = (second) => {
  third;
};

const obj = {};
