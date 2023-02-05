import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() checkChangedEvent = new EventEmitter<void>();
  @Output() newProductEvent = new EventEmitter<void>();
  @Output() productSelectedEvent = new EventEmitter<Product>();

  checkChanged(): void {
    this.checkChangedEvent.emit();
  }

  newProduct(): void {
    this.newProductEvent.emit();
  }

  productSelected(product: Product): void {
    this.productSelectedEvent.emit(product);
  }
}
