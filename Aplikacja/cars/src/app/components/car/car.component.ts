import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Car } from './../../model/car.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  selectedCar: Car;

  myForm: FormGroup;
  brand: AbstractControl;
  founded: AbstractControl;
  cars: Car[];
  constructor(fb: FormBuilder, private carService: CarService) {
    this.myForm = fb.group({
      'brand': ['', Validators.compose([
        Validators.required, Validators.minLength(3), this.myBrandValidator, this.myFirstLetterBigValidator, this.myIsNumberValidator
      ])],
      'founded': ['', Validators.compose([
        Validators.min(1700), this.myNumbersOnlyValidator
      ])]
    });

    this.brand = this.myForm.controls['brand'];
    this.founded = this.myForm.controls['founded'];
  }

  ngOnInit() {
    this.getCars();
  }
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => cars = cars);
  }

  mySubmit(value: any) {
    let car = new Car(this.brand.value, this.founded.value);
    this.carService.addCar(car);
    console.log(this.carService.getCars());
  }

  myBrandValidator(control: FormControl) {
    if (control.value.match(/^Vau/i)) {
      return {
        'wrongValue': true
      }
    }
  }

  myFirstLetterBigValidator(control: FormControl) {
    if (control.value.match(/^[a-z]/)) {
      return {
        'notBigValue': true
      }
    }
  }
  myIsNumberValidator(control: FormControl) {
    if (control.value.match(/[0-9]/)) {
      return {
        'numberValue': true
      }
    }
  }
  myNumbersOnlyValidator(control: FormControl) {
    if (control.value.match(/[A-z]/)) {
      return {
        'notNumber': true
      }
    }
  }
}
