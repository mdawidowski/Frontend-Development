import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    BrandDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
