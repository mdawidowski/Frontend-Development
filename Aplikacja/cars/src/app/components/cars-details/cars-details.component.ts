import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../model/car.model';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
