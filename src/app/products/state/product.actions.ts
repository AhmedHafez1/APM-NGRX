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
