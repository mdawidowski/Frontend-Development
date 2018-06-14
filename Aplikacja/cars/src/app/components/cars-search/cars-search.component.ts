import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css']
})
export class CarsSearchComponent implements OnInit {

  searchControl = new FormControl();
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchUpdated() {
    this.searchQuery.emit(this.searchControl.value);
  }

}
