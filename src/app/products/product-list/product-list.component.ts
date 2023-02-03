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
} from './../state/product.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { toggleProductCode } from '../state/product.actions';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage$: Observable<string> = this.store.select(productErrorSelector);

  displayCode$: Observable<boolean>;

  products$: Observable<Product[]>;

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product | null>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(currentProductSelector);

    this.products$ = this.store.select(productListSelector);

    this.store.dispatch(loadProducts());

    this.displayCode$ = this.store.select(showProductCodeSelector);
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
