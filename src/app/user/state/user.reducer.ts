import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface UserState {
  name: string;
  maskUserName: boolean;
}

export const toggleMaskUserName = '[User] Toogle Mask User Name';

export const userSelector = createFeatureSelector<UserState>('user');

export const toggleMaskUserNameSelector = createSelector(
  userSelector,
  (state) => state.maskUserName
);

const initialState: UserState = {
  name: '',
  maskUserName: false,
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(createAction(toggleMaskUserName), (state) => {
    return { ...state, maskUserName: !state.maskUserName };
  })
);
