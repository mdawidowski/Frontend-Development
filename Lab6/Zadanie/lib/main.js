"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RetroCar = function RetroCar(brand, nationality) {
  _classCallCheck(this, RetroCar);

  this.brand = brand;
  this.nationality = nationality;
};

function sayMyCarName(car) {
  console.log('Your car is ' + car.brand);
}

var fiat = new RetroCar('Fiat', 'Italy');
console.log(fiat.brand);
sayMyCarName(fiat);