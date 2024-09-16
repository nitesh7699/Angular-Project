import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NgFor, NgIf } from '@angular/common';
import { ProductListNewComponent } from "./product-list-new/product-list-new.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListNewComponent, ProductDetailComponent, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    listOfString : string[] = ["mark", "hussain", "nitesh", "abhi"];
    name = "John Smith";
    addToCart : number = 0;
    product = {
      name: "iphone13",
      price: 445,
      color: "red",
      discount: 10,
      inStock: 10,
      customerName: "John Doe"
    }

    onNameChange(event: any){
      this.name = event.target.value;
      // this.name = "Mark";
    }

    decrementCartValue(){
      if(this.addToCart > 0){
        this.addToCart--;
      }
    }

    incrementCartValue(){
      if(this.addToCart < this.product.inStock){
        this.addToCart++;
      }
    }

    searchText: string = '';
    setSearchText(value: string){
      this.searchText = value;
    }

    @ViewChild(ProductListNewComponent) productListNewComponent: ProductListNewComponent;

}
