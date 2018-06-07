import { Injectable} from '@angular/core';
import { Car } from './../model/car.model';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';``
@Injectable()
export class CarService {

  cars: Car[];
  constructor() {
    this.cars = [ new Car('Aston Martin', 1978), new Car('Mazda', 1979), new Car('Ford', 1978)];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  addCars(car: Car){
    this.cars.push(car);
  }
}
