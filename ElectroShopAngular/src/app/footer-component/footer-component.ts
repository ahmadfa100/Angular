import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
styleUrl: './footer-component.css',
templateUrl: './footer-component.html',
})
export class FooterComponent {
  storeName = 'ElectroShop';
  storeAddress = 'Amman, Jordan';
  contactEmail = 'contact@electroshop.example';
  copyrightMessage = '© 2026 ElectroShop. All rights reserved.';
}
