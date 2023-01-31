import { createReducer, on, createAction } from '@ngrx/store';

export interface UserState {
  name: string;
  maskUserName: boolean;
}

export const ToggleMaskUserName = '[User] Toogle Mask User Name';

const initialState: UserState = {
  name: '',
  maskUserName: false,
};
export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction(ToggleMaskUserName), (state) => {
    return { ...state, maskUserName: !state.maskUserName };
  })
);
