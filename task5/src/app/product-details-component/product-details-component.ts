import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-details-component',
  styleUrl: './product-details-component.css',
  templateUrl: './product-details-component.html',
})
export class ProductDetailsComponent {
  @Input() productName = '';
  @Input() description = '';
  @Input() price = 0;
  @Input() isAvailable = true;

  Quantity = signal(1);

  increase() {
    this.Quantity.update((c) => c + 1);
  }

  decrease() {
    if (this.Quantity() > 1) this.Quantity.update((c) => c - 1);
  }

  @Output() pName = new EventEmitter<string>();
  @Output() pQuantity = new EventEmitter<number>();

  addToCart() {
    this.pName.emit(this.productName);
    this.pQuantity.emit(this.Quantity());
  }
}
