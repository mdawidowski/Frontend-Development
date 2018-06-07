import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarService } from './services/car.service';
import { AppComponent } from './app.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarsComponent } from './cars/cars.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    CarSearchComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
