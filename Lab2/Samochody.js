var Cars = {};

Cars = (function() {
  "use strict";
  var CarInterface = {
    brands: [
      "Audi",
      "BMW",
      "Toyota",
      "Porsche",
      "Fiat",
      "Aston Martin",
      "Dacia",
      "Mercedes",
      "Ford",
      "Seat",
      "VW",
      "Rover",
      "Polones",
      "Opel",
      "Daihatsu"
    ],
    typeofengine: [
      "Petrol", "Diesel", "Gas", "Hybrid", "Electric"
    ],
    showBrands: function() {
      return CarInterface.brands.join(", ");
    },
    showTypes: function() {
      return CarInterface.typeofengine.join(", ");
    },
    add: function(brand) {
      CarInterface.brands.push(brand);
    },
    delete: function(brand) {
      const carId = CarInterface.brands.indexOf(brand)
      if (carId >= 0) {
        CarInterface.brands.splice(carId, 1);
      }
    },
    edit: function(brand, newbrand) {
      const carId = CarInterface.brands.indexOf(brand);
      if (carId !== -1) {
        CarInterface.brands[carId] = newbrand;
      }
    }
  };
  CarInterface.brands.sort();
  return CarInterface;
})();

Cars.add("McLaren");
Cars.delete("Daihatsu");
Cars.edit("Polones", "Polonez")
console.log(Cars.showTypes());
console.log(Cars.showBrands());
