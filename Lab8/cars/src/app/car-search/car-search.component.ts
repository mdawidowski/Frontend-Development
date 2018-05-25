import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  searchControl = new FormControl();
  searchItems: string[] = [];
  constructor() {
    this.searchControl.valueChanges.subscribe(
      searchTerm => this.searchItems.push(searchTerm)
    );
  }


  ngOnInit() {
    }

}
