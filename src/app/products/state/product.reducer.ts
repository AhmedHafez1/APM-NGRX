import * as AppState from './../../app.state';
import { Product } from './../product';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export interface State extends AppState.State {
  product: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProduct: Product;
}

export const toggleProductCode = '[Product] Toggle Product Code';

export const productSelector = createFeatureSelector<ProductState>('product');

export const showProductCodeSelector = createSelector(
  productSelector,
  (state) => state.showProductCode
);

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProduct: null,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction(toggleProductCode), (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  })
);
