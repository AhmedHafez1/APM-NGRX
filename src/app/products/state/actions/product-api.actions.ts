import { Product } from '../../product';
import { createAction, props } from '@ngrx/store';

export const loadProductsSuccess = createAction(
  '[Product API] Success Load Products',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Fail Load Products',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product API] Success Update Product',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product API] Fail Update Product',
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  '[Product API] Success Create Product',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product API] Fail Create Product',
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product API] Success Delete Product',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product API] Fail Delete Product',
  props<{ error: string }>()
);
