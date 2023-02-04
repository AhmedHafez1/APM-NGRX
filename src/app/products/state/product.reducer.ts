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
  loadProductsSuccess,
  loadProductsFailure,
  updateProductSuccess,
  updateProductFailure,
  createProductSuccess,
  deleteProductSuccess,
  deleteProductFailure,
} from './product.actions';

export interface State extends AppState.State {
  product: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProductId: number;
  error: string;
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

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProductId: null,
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(toggleProductCode, (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  }),
  on(setCurrentProduct, (state, action) => ({
    ...state,
    currentProductId: action.currentProductId,
  })),
  on(clearCurrentProduct, (state) => ({ ...state, currentProduct: null })),
  on(initializeCurrentProduct, (state) => ({
    ...state,
    currentProductId: 0,
  })),
  on(loadProductsSuccess, (state, action) => {
    return { ...state, products: action.products, error: '' };
  }),
  on(loadProductsFailure, (state, action) => {
    return { ...state, products: [], error: action.error };
  }),
  on(updateProductSuccess, (state, action) => {
    const index = state.products.findIndex((p) => p.id === action.product.id);
    const updatedProducts = [...state.products];
    updatedProducts.splice(index, 1, action.product);
    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(updateProductFailure, (state, action) => {
    return { ...state, error: state.error };
  }),
  on(createProductSuccess, (state, action) => {
    const products = [...state.products, action.product];
    return {
      ...state,
      products,
      currentProductId: action.product.id,
    };
  }),
  on(createProductSuccess, (state, action) => {
    return { ...state, error: state.error };
  }),
  on(deleteProductSuccess, (state, action) => {
    const index = state.products.findIndex((p) => p.id === action.productId);
    const products = [...state.products];
    products.splice(index, 1);
    return {
      ...state,
      products,
      currentProductId: null,
    };
  }),
  on(deleteProductFailure, (state, action) => {
    return { ...state, error: state.error };
  })
);
