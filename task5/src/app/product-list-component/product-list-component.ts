import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  imports: [NgClass, NgStyle],
  selector: 'app-product-list-component',
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 850,
      category: 'Electronics',
      isAvailable: true,
      discount: 15,
      image: 'products/Laptop.png',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 450,
      category: 'Electronics',
      isAvailable: true,
      discount: 0,
      image: 'products/SmartPhone.png',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 120,
      category: 'Accessories',
      isAvailable: false,
      discount: 10,
      image: 'products/Headphones.png',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 180,
      category: 'Accessories',
      isAvailable: true,
      discount: 20,
      image: 'products/SmartWatch.png',
    },
    {
      id: 5,
      name: 'Tablet',
      price: 300,
      category: 'Electronics',
      isAvailable: false,
      discount: 5,
      image: 'products/Tablet.png',
    },
    {
      id: 6,
      name: 'Keyboard',
      price: 65,
      category: 'Accessories',
      isAvailable: true,
      discount: 0,
      image: 'products/Keyboard.png',
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 45,
      category: 'Accessories',
      isAvailable: true,
      discount: 10,
      image: 'products/GamingMouse.png',
    },
    {
      id: 8,
      name: 'Monitor',
      price: 220,
      category: 'Electronics',
      isAvailable: false,
      discount: 0,
      image: 'products/Monitor.png',
    },
  ];

  orderStatus = 'Pending';
  selectedCategory = 'All Products';

  buyProduct(name: string) {
    alert('You bought ' + name);
  }
}
