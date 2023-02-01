import * as AppState from './../../app.state';
import { Product } from './../product';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  toggleProductCode,
  setCurrentProduct,
  clearCurrentProduct,
  initializeCurrentProduct,
} from './product.actions';

export interface State extends AppState.State {
  product: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProduct: Product;
}

export const productSelector = createFeatureSelector<ProductState>('product');

export const showProductCodeSelector = createSelector(
  productSelector,
  (state) => state.showProductCode
);
export const currentProductSelector = createSelector(
  productSelector,
  (state) => state.currentProduct
);

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProduct: null,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(toggleProductCode, (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  }),
  on(setCurrentProduct, (state, action) => ({
    ...state,
    currentProduct: action.product,
  })),
  on(clearCurrentProduct, (state) => ({ ...state, currentProduct: null })),
  on(initializeCurrentProduct, (state) => ({
    ...state,
    currentProduct: {
      id: 0,
      description: '',
      productCode: '',
      productName: '',
      starRating: 0,
    },
  }))
);
