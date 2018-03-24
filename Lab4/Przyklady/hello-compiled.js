"use strict";

var evenPredicate = function evenPredicate(v) {
  return v % 2 === 0;
};
var evens = [1, 2, 3, 4, 5, 6].filter(evenPredicate);
evens.forEach(function (v) {
  return console.log(v);
});

var aShape = {
  x: 4,
  y: 3,
  move: function move(delta) {
    return undefined.x += delta;
  }
};

aShape.move(5);
console.log(aShape.x);
