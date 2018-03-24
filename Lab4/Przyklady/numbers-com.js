"use strict";

var aShape = {
  numbers: [1, 2, 3, 4, 5],
  scale: 2,
  move: function move() {
    console.log(this.scale);
    var self = this;
    this.numbers = this.numbers.map(function (element) {
      return element * self.scale;
    });
  }
};

aShape.move();
aShape.numbers.forEach(function (element) {
  console.log(element);
});
