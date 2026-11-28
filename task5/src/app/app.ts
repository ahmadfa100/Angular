import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { ShoppingCartComponent } from './shopping-cart-component/shopping-cart-component';
import { ProductListComponent } from './product-list-component/product-list-component';

@Component({
  imports: [ProductDetailsComponent, ShoppingCartComponent,    ProductListComponent
],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  productName = 'Laptop';
  description = 'Description	Dell Laptop, Core i7, 16GB RAM';
  price = 850;
  isAvailable = true;

  cartName = '';
  cartPrice = 0;
  cartQuantity = 0;

  addedToChart(name: string) {
    this.cartName = name;
    this.cartPrice = this.price;
  }

  changeProduct() {
    this.productName = 'headphone';
    this.description = 'good one for you';
    this.price = 120;
    this.isAvailable = true;
  }
}
