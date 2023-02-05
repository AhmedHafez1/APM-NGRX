import { createReducer, on } from '@ngrx/store';
import { from } from 'rxjs';
import { Product } from '../product';
import { ProductPageActions, ProductAPIActions } from './actions';

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
  on(ProductPageActions.toggleProductCode, (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action) => ({
    ...state,
    currentProductId: action.currentProductId,
  })),
  on(ProductPageActions.clearCurrentProduct, (state) => ({
    ...state,
    currentProduct: null,
  })),
  on(ProductPageActions.initializeCurrentProduct, (state) => ({
    ...state,
    currentProductId: 0,
  })),
  on(ProductAPIActions.loadProductsSuccess, (state, action) => {
    return { ...state, products: action.products, error: '' };
  }),
  on(ProductAPIActions.loadProductsFailure, (state, action) => {
    return { ...state, products: [], error: action.error };
  }),
  on(ProductAPIActions.updateProductSuccess, (state, action) => {
    const index = state.products.findIndex((p) => p.id === action.product.id);
    const updatedProducts = [...state.products];
    updatedProducts.splice(index, 1, action.product);
    return {
      ...state,
      products: updatedProducts,
    };
  }),
  on(ProductAPIActions.updateProductFailure, (state, action) => {
    return { ...state, error: state.error };
  }),
  on(ProductAPIActions.createProductSuccess, (state, action) => {
    const products = [...state.products, action.product];
    return {
      ...state,
      products,
      currentProductId: action.product.id,
    };
  }),
  on(ProductAPIActions.createProductSuccess, (state, action) => {
    return { ...state, error: state.error };
  }),
  on(ProductAPIActions.deleteProductSuccess, (state, action) => {
    const index = state.products.findIndex((p) => p.id === action.productId);
    const products = [...state.products];
    products.splice(index, 1);
    return {
      ...state,
      products,
      currentProductId: null,
    };
  }),
  on(ProductAPIActions.deleteProductFailure, (state, action) => {
    return { ...state, error: state.error };
  })
);
