import { Person } from './../model/person';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() personToShow: Person;

  @Output() childChanged = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  informParent() {
    this.childChanged.emit(this.personToShow);
  }

}
