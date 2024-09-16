import { Component, Input } from '@angular/core';
import { Product } from './../../Models/Product';
import { NgIf } from '@angular/common';
import { ProductListNewComponent } from '../product-list-new/product-list-new.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListNewComponent = undefined;
  product: Product;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }
}
