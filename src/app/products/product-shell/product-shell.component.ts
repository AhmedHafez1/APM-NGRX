import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import {
  setCurrentProduct,
  initializeCurrentProduct,
  loadProducts,
} from './../state/product.actions';
import {
  State,
  showProductCodeSelector,
  currentProductSelector,
  productListSelector,
  productErrorSelector,
} from './../state';

import { Product } from '../product';
import { toggleProductCode } from '../state/product.actions';
@Component({
  templateUrl: './product-shell.component.html',
})
export class ProductShellComponent implements OnInit {
  errorMessage$ = this.store.select(productErrorSelector);
  displayCode$ = this.store.select(showProductCodeSelector);
  products$ = this.store.select(productListSelector);
  selectedProduct$ = this.store.select(currentProductSelector);

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  checkChanged(): void {
    this.store.dispatch(toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(setCurrentProduct({ currentProductId: product.id }));
  }
}
