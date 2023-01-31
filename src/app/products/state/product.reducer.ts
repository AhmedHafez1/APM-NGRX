import * as AppState from './../../app.state';
import { Product } from './../product';
import { createAction, createReducer, on } from '@ngrx/store';

export interface State extends AppState.State {
  product: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProduct: Product;
}

export const ToggleProductCode = '[Product] Toggle Product Code';

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProduct: null,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction(ToggleProductCode), (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  })
);
