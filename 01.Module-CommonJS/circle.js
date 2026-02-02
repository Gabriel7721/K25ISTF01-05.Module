const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius}`);
  }
}

// NOTE: cách 1:
module.exports.Circle = Circle;


// NOTE: cách 1:
module.exports = Circle;