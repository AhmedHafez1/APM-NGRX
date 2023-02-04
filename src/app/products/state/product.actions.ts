import { Product } from './../product';
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Success Load Products',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Fail Load Products',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Success Update Product',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product] Fail Update Product',
  props<{ error: string }>()
);

export const createProduct = createAction(
  '[Product] Create Product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product] Success Create Product',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product] Fail Create Product',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Success Delete Product',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product] Fail Delete Product',
  props<{ error: string }>()
);
