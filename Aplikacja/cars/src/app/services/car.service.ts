import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('http://localhost:8000/api/cars');
  }

  addCar(carData) {
    return this.http.post('http://localhost:8000/api/car', carData, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}
