import { Injectable} from '@angular/core';
import { Person } from './../model/person.model';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class PersonService {

  persons: Person[];
  constructor() {
    this.persons = [ new Person('Bolek', 1978), new Person('Lolek', 1979), new Person('Tola', 1978)];
  }

  getPersons(): Observable<Person> {
    return from(this.persons);
  }

  addPersons(person: Person){
    this.persons.push(person);
  }
}
