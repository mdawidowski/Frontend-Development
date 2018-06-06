import { Injectable} from '@angular/core';
import { Car } from './../model/car.model';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class CarService {

  cars: Car[];
  constructor() {
    this.cars = [ new Car('Aston Martin', 1978), new Car('Mazda', 1979), new Car('Ford', 1978)];
  }

  getCars(): Observable<Car> {
    return from(this.cars);
  }

  addCars(car: Car){
    this.cars.push(car);
  }
}
