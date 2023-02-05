import * as AppState from './../../app.state';
import { Product } from './../product';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export interface State extends AppState.State {
  product: ProductState;
}

export const productSelector = createFeatureSelector<ProductState>('product');

export const showProductCodeSelector = createSelector(
  productSelector,
  (state) => state.showProductCode
);

export const currentProductIdSelector = createSelector(
  productSelector,
  (state) => state.currentProductId
);

export const productListSelector = createSelector(
  productSelector,
  (state) => state.products
);

export const currentProductSelector = createSelector(
  productListSelector,
  currentProductIdSelector,
  (products, currentProductId) => {
    return currentProductId === 0
      ? ({ id: 0 } as Product)
      : products.find((p) => p.id === currentProductId);
  }
);

export const productErrorSelector = createSelector(
  productSelector,
  (state) => state.error
);
