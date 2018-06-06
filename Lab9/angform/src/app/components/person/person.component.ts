import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Person } from './../../model/person.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;
  imie: AbstractControl;
  rokUr: AbstractControl;

  persons: Observable<Person>
  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group({
      'imie':['Podaj imie', Validators.compose([
        Validators.required, Validators.minLength(3),this.myImieValidator
      ])],
      'rokUr':['Podaj rok urodzenia', Validators.compose([
        Validators.min(1970)
      ])]
    });

    this.imie = this.myForm.controls['imie'];
    this.rokUr = this.myForm.controls['rokUr'];
    personService.getPersons().subscribe( p => console.log(p))
  }

  ngOnInit() {
  }

  mySubmit(value: any){
    const person = new Person(this.imie.value, this.rokUr.value);
    this.personService.addPersons(person);
  }

  myImieValidator(control: FormControl){
    if(control.value.match(/^Bol/i)){
      return{
        'bolekValue':true
      }
    }
  }
}
