"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Klasy ze swojej dziedziny w ES6 zawierające elementy z poprzednich zadań
// lambda - TAK
// classes + dziedziczenie - TAK
// template strings - TAK
// default + rest + spread -
// let, const - TAK
// iterators + for..of -
var modelsAM = [" DB9", " DB9 Coupé", " DB9 Volante", " V8 Vantage", " V8 Vantage Roadster", " V12 Vantage", " Rapide", " Vanquish", " V12 Vantage S", " Lagonda II", " DB11"];

var Car = function () {
  function Car(brand, typeofengine, country, yearfounded, hasF1Team) {
    _classCallCheck(this, Car);

    this.brand = brand;
    this.typeofengine = typeofengine;
    this.country = country;
    this.yearfounded = yearfounded;
    this.hasF1Team = hasF1Team;
  }

  _createClass(Car, [{
    key: "showModels",
    value: function showModels(models) {
      return models;
    }
  }]);

  return Car;
}();

function isOlder(car1, car2) {
  if (car1.yearfounded != car2.yearfounded) {
    var older = function older(a, b) {
      return a.yearfounded < b.yearfounded ? a : b;
    };
    var newer = function newer(a, b) {
      return a.yearfounded > b.yearfounded ? a : b;
    };
    var isolder = older(car1, car2);
    var isnewer = newer(car1, car2);
    return console.log(isolder.brand + " is older than " + isnewer.brand + ". The difference is " + (isnewer.yearfounded - isolder.yearfounded) + " years");
  }
  return console.log("Brands are the same age");
}

function gotF1Car(car) {
  return console.log("It is " + car.hasF1Team + " that " + car.brand + " has F1 team");;
}

var AstonMartin = new Car("Aston Martin", "mostly petrol", "Great Britain", 1913, true);
var Mclaren = new Car("Mclaren", "mostly petrol", "Great Britain", 1963, true);
var Arrinera = new Car("Arrinera", "petrol", "Poland", 2008, false);

console.log("Modele Aston Martin:" + AstonMartin.showModels(modelsAM));
isOlder(Arrinera, AstonMartin);
gotF1Car(Mclaren);
