const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(cars))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

class Car {
  constructor(brand, country) {
    this.brand = brand;
    this.country = country;
  }

let cars = [new Car('Aston Martin', '1913'), new Car('Mazda', '1920'), new Car('Ford', '1903')];
