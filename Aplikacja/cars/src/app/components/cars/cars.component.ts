import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  selectedCar: Car;

  cars: Car[] = [];
  addCar = false;
  listToShow = this.cars;

  constructor(private fb: FormBuilder, private carsService: CarService) {
    this.reloadCars();
  }

  ngOnInit() {
  }

  select(car) {
    this.selectedCar = car;
  }

  updateList(query: string) {
    this.listToShow = this.cars.filter(vehicle => {
      return (vehicle.brand + ' ' + vehicle.model).toLowerCase().includes(query.toLocaleLowerCase());
    });
  }


  reloadCars() {
    this.cars.splice(0, this.cars.length);
    this.carsService.getCars().subscribe((res: any[]) => {
      for (let vehicle of res) {
        this.cars.push(new Car(
          vehicle.brand,
          vehicle.model,
          vehicle.nationality,
          vehicle.price
        ));
      }
    });
  }


  carAdded() {
    this.addCar = false;
    this.reloadCars();
  }

}
