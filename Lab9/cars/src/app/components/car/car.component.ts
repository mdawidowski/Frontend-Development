import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Car } from './../../model/car.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  myForm: FormGroup;
  brand: AbstractControl;
  founded: AbstractControl;

  cars: Observable<Car>
  constructor(fb: FormBuilder, private carService: CarService) {
    this.myForm = fb.group({
      'brand':['Brand', Validators.compose([
        Validators.required, Validators.minLength(3),this.myBrandValidator, this.myFirstLetterBigValidator
      ])],
      'founded':['Year founded', Validators.compose([
        Validators.min(1970)
      ])]
    });

    this.brand = this.myForm.controls['brand'];
    this.founded = this.myForm.controls['founded'];
    carService.getCars().subscribe( p => console.log(p))
  }

  ngOnInit() {
  }

  mySubmit(value: any){
    const car = new Car(this.brand.value, this.founded.value);
    this.carService.addCars(car);
  }

  myBrandValidator(control: FormControl){
    if(control.value.match(/^Vau/i)){
      return{
        'wrongValue':true
      }
    }
  }

  myFirstLetterBigValidator(control: FormControl){
    if(control.value.match(/^[a-z]/)){
      return{
        'notBigValue':true
      }
    }
  }
}
