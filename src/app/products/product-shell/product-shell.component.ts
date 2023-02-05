import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  State,
  showProductCodeSelector,
  currentProductSelector,
  productListSelector,
  productErrorSelector,
} from './../state';

import { Product } from '../product';
import { ProductPageActions } from '../state/actions';

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
    this.store.dispatch(ProductPageActions.loadProducts());
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductPageActions.setCurrentProduct({ currentProductId: product.id })
    );
  }
}
