import { createAction, createReducer, on } from '@ngrx/store';

export const ToggleProductCode = '[Product] Toggle Product Code';

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction(ToggleProductCode), (state) => {
    return { ...state, showProductCode: !state.showProductCode };
  })
);
