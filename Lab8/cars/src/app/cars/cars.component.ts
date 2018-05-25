import { Component, OnInit } from '@angular/core';
import { Car } from '../model/cars';
export { Car }
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  constructor() {
    this.cars = [
      new Car('Fiat', 'Italy', '1901'),
      new Car('McLaren', 'Great Britain', '1945'),
      new Car('Lada', 'Russia', '1940'),
      new Car('Aston Martin', 'Great Britain', '1910'),
      new Car('Ferrari', 'Italy', '1891'),
      new Car('Ford', 'USA', '1955'),
      new Car('Chevrolet', 'USA', '1975'),
      new Car('Polonez', 'Poland', '1935'),
      new Car('Skoda', 'Czech Republic', '1945'),
      new Car('Lancia', 'Italy', '1975'),
      new Car('Toyota', 'Japan', '1945'),
      new Car('Nissan', 'Japan', '1945'),
      new Car('Volkswagen', 'Germany', '1945'),
      new Car('Audi', 'Germany', '1945'),
      new Car('Opel', 'Germany', '1945'),
      new Car('Bugatti', 'France', '1945'),
      new Car('Porsche', 'Germany', '1945'),
      new Car('BMW', 'Germany', '1945')
    ];
  }

  ngOnInit() {
  }

}
