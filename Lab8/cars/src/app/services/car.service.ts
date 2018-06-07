import { Injectable } from '@angular/core';
import { Car } from './../model/cars';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of'; ``
@Injectable()
export class CarService {

  cars: Car[];
  constructor() {
    this.cars = [
      new Car('Audi',  '1945'),
      new Car('Aston Martin', '1913'),
      new Car('Bugatti', '1945'),
      new Car('BMW', '1945'),
      new Car('Chevrolet', '1975'),
      new Car('Fiat', '1901'),
      new Car('Ferrari',  '1891'),
      new Car('Ford', '1903'),
      new Car('Lada',  '1940'),
      new Car('Lancia',  '1975'),
      new Car('Mazda', '1920'),
      new Car('McLaren',  '1945'),
      new Car('Nissan',  '1945'),
      new Car('Opel',  '1945'),
      new Car('Polonez',  '1935'),
      new Car('Porsche', '1945'),
      new Car('Skoda',  '1945'),
      new Car('Toyota',  '1945'),
      new Car('Volkswagen',  '1945')
     ];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  addCars(car: Car) {
    this.cars.push(car);
  }
}
