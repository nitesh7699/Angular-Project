import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule} from '@angular/forms';
import { Product } from './../../Models/Product'

@Component({
  selector: 'app-product-list-new',
  standalone: true,
  imports: [NgFor, NgStyle, ProductComponent, FilterComponent, NgIf, FormsModule],
  templateUrl: './product-list-new.component.html',
  styleUrl: './product-list-new.component.css'
})
export class ProductListNewComponent {

  selectedProduct: Product;
  products = [
    {
      id : 1,
      name : "Nitesh Soni",
      desc : "hello world!!!",
      brand : "NIKE",
      color : ["white", "red", "black", "yellow"],
      price: 150,
      is_in_inventory: true,
      gender: 'M'
    },
    {
      id : 2,
      name : "Abhi Soni",
      desc : "Bye world!!!",
      brand : "PUMA",
      price: 200,
      color : ["white", "red", "black"],
      gender: 'M',
      is_in_inventory: false
    },
    {
      id : 3,
      name : "Rashu Soni",
      desc : "Hello Bye world!!!",
      brand : "HRX",
      price : 248,
      color : ["white", "red", "black", "green", "Orange"],
      gender: 'F',
      is_in_inventory: true,
    }
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_inventory===true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory===false).length;

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string){
    //console.log('onFilterChanged called!!!');
    //console.log(value);
    this.selectedFilterRadioButton = value;
  }

  @Input()
  searchText: string='';

}
