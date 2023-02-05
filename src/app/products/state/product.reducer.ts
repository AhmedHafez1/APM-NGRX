import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
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

export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProductId: number;
  error: string;
}

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
