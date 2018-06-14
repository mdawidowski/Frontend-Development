import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { CarsComponent } from './components/cars/cars.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsDetailsComponent } from './components/cars-details/cars-details.component';
import { CarsSearchComponent } from './components/cars-search/cars-search.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailsComponent,
    CarsSearchComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
