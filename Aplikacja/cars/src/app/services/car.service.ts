import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Car {
  brand: string;
  founded: number;
}

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8000/api/cars');
  }

  getCar(brand: string): Observable<Car> {
    return this.http.get<Car>('http://localhost:8000/api/cars/' + brand);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>('http://localhost:8000/api/cars/', car);
  }

  updateCar(car: Car): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/cars/' + car.brand, car);
  }

  deleteCar(brand: string) {
    return this.http.delete('http://localhost:8000/api/cars/' + brand);
  }
}
