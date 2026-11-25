import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products = [
    {
      Name: 'Laptop',
      Description: 'High-performance laptop',
      Price: 750,
      Image: 'products/Laptop.png',
      Availability: true,
    },
    {
      Name: 'Smartphone',
      Description: 'Latest smartphone',
      Price: 450,
      Image: 'products/Smartphone.png',
      Availability: true,
    },
    {
      Name: 'Headphones',
      Description: 'Wireless headphones',
      Price: 80,
      Image: 'products/Headphones.png',
      Availability: true,
    },
    {
      Name: 'Smart Watch',
      Description: 'Smart fitness watch',
      Price: 120,
      Image: 'products/SmartWatch.png',
      Availability: true,
    },
    {
      Name: 'Keyboard',
      Description: 'Mechanical keyboard',
      Price: 45,
      Image: 'products/Keyboard.png',
      Availability: false,
    },
  ];

  buyProduct(name: string) {
    alert('You bought ' + name);
  }
}
