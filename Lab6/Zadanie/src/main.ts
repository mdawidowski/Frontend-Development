import {Car} from './car'

class RetroCar {
  constructor(public brand: string, public nationality: string){
    this.brand = brand;
    this.nationality = nationality;
  }
}

function sayMyCarName(car: Car){
  console.log('Your car is ' + car.brand)
}

let fiat = new RetroCar('Fiat', 'Italy')
console.log(fiat.brand)

sayMyCarName(fiat)
