import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand';
import { BRANDS } from '../mock-brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands = BRANDS;
  selectedBrand: Brand;

onSelect(brand: Brand): void {
  this.selectedBrand = brand;
}
  constructor() { }

  ngOnInit() {
  }

}
