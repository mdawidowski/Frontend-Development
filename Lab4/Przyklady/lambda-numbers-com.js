"use strict";

var aShape = {
  numbers: [1, 2, 3, 4, 5],
  scale: 2,
  move: function move() {
    var _this = this;

    console.log(this.scale);
    this.numbers = this.numbers.map(function (element) {
      return element * _this.scale;
    });
  }
};

aShape.move();
aShape.numbers.forEach(function (element) {
  console.log(element);
});
