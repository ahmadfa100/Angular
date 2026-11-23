import { Component, signal } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShopAngular');
  storeName = 'ElectroShop';
  storeDescription = 'Your favorite electronics store';
  storeAddress = 'Amman, Jordan';
  isStoreOpen = true;
  currency = 'USD';

  productNames = ['Laptop', 'Smartphone', 'Headphones', 'Smart Watch', 'Keyboard'];

  productPrice = [750, 450, 80, 120, 45];

  products = [
    { Name: 'Laptop', Price: 750, Description: 'A good Laptop' },
    { Name: 'Smartphone', Price: 450, Description: 'A good Smartphone' },
    { Name: 'Headphones', Price: 80, Description: 'A good Headphones' },
    { Name: 'Smart Watch', Price: 120, Description: 'A good Smart Watch' },
    { Name: 'Keyboard', Price: 45, Description: 'A good Keyboard' },
  ];

  discountPercentage = 0.1;
  discountedPrices: number[] = [];

  totalProducts: number = this.products.length;

  maximumPrice: number = 0;
  minimumPrice: number = 0;
  sumPrice: number = 0;

  constructor() {
    this.productPrice.forEach((element) => {
      let temp = this.discountPercentage * element;
      element -= temp;
      this.discountedPrices.push(element);

      this.productPrice.forEach((element) => {
        this.sumPrice += element;
        this.minimumPrice = Math.min(this.minimumPrice, element);
        this.maximumPrice = Math.max(this.minimumPrice, element);
      });
    });
  }
}
