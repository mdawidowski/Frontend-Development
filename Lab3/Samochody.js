var models = [
  " DB9",
  " DB9 Coupé",
  " DB9 Volante",
  " V8 Vantage",
  " V8 Vantage Roadster",
  " V12 Vantage",
  " Rapide",
  " Vanquish",
  " V12 Vantage S",
  " Lagonda II",
  " DB11"
];

function Car(brand, typeofengine, country) {
  "use strict";
  this.brand = brand;
  this.typeofengine = typeofengine;
  this.country = country;
  this.models = {};
}

Car.prototype = {
  showInformations: function() {
    "use strict";
    return "Name: " + this.brand + ", Type of engine: " + this.typeofengine + ", Country: " + this.country;
  },
  getModels: function(models) {
    "use strict";
    return models;
  }
};

function Aston(brand, typeofengine, country) {
  Car.call(this, brand, typeofengine, country);
}

Aston.prototype = Object.create(Car.prototype);
Aston.prototype.constructor = Aston;

var AstonMartin = new Aston("Aston Martin", "mostly Petrol", "Great Britain");

console.log(AstonMartin.showInformations());
console.log("List of models: " + AstonMartin.getModels(models));
