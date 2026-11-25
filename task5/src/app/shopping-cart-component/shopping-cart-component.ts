import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-shopping-cart-component',
  styleUrl: './shopping-cart-component.css',
  templateUrl: './shopping-cart-component.html',
})
export class ShoppingCartComponent {
  @Input() productName = "";
  @Input() price = 0;
  @Input() quantity = 0;
}
