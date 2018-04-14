"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name, yob) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = yob;
};

function sayHello(person) {
  console.log('Hello ' + person.name);
}

var zenek = new Student('Zenon', 2006);
console.log(zenek.name);
var ziutek = {
  name: 'Ziutek',
  yob: 2005,
  pesel: 123
};
var myList = [ziutek, zenek];
var myTuple = ["Fiat", 1998];
console.log(myTuple[0]);
sayHello(ziutek);
sayHello(zenek);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

console.log(Color.Blue);
var something = 5;
something = "Hello";
something = false;
console.log(_typeof(something));