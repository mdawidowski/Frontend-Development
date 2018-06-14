import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isNumber} from 'util';
import {Car} from '../../model/car.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  newCarForm: FormGroup;
  constructor(private fb: FormBuilder, private carsService: CarService) { }

  ngOnInit() {
    this.newCarForm = this.fb.group({
      brand: ['', [Validators.required, this.firstLetterBigValidator]],
      model: ['', [Validators.required, this.firstLetterBigValidator]],
      nationality: ['', [Validators.required, this.firstLetterBigValidator]],
      price: ['', [Validators.required, this.notPositiveNumberValidator, this.numbersOnlyValidator]],
    });
  }

  onSubmit(formValue) {
      this.carsService.addCar(formValue).subscribe(res => this.formSubmitted.emit());
  }

  myBrandValidator(control: FormControl) {
  if (control.value.match(/^Vau/i)) {
    return {
      'wrongValue': true
    }
  }
}

firstLetterBigValidator(control: FormControl) {
  if (control.value.match(/^[a-z]/)) {
    return {
      'notBigValue': true
    }
  }
}
isNumberValidator(control: FormControl) {
  if (control.value.match(/[0-9]/)) {
    return {
      'numberValue': true
    }
  }
}
numbersOnlyValidator(control: FormControl) {
  if (control.value.match(/[A-z]/)) {
    return {
      'notNumber': true
    }
  }
}
  notPositiveNumberValidator(control: FormControl) {
    if (isNaN(parseInt(control.value, 10)) || parseInt(control.value, 10) <= 0) {
      return {'notPositiveNumberError': true};
    }
  }

}
