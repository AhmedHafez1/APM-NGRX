import { Product } from './../product';
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
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
