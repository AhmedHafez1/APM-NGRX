import { createReducer, on, createAction } from '@ngrx/store';
export const ToggleMaskUserName = '[User] Toogle Mask User Name';

export const userReducer = createReducer(
  { maskUserName: false },
  on(createAction(ToggleMaskUserName), (state) => {
    return { ...state, maskUserName: !state.maskUserName };
  })
);
