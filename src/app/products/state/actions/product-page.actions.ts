import { Product } from '../../product';
import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction(
  '[Product Shell Page] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Edit Page] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product Shell Page] Initialize Current Product'
);

export const loadProducts = createAction('[Product Shell Page] Load Products');

export const updateProduct = createAction(
  '[Product Edit Page] Update Product',
  props<{ product: Product }>()
);

export const createProduct = createAction(
  '[Product Edit Page] Create Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product Edit Page] Delete Product',
  props<{ productId: number }>()
);
