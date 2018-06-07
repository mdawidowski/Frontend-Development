import { Component, OnInit } from '@angular/core';
import { CarService } from './../services/car.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Car } from './../model/cars';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  cars: Car[];
  searchControl = new FormControl();
  searchItems: string[] = [];
  constructor(private carService: CarService) {
    this.searchControl.valueChanges.subscribe(
      searchTerm => this.searchItems.push(searchTerm)
    );
  }

  ngOnInit() {
    this.getCars()
    }
  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
