import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { toggleMaskUserName } from './user.actions';

export interface UserState {
  name: string;
  maskUserName: boolean;
}

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
  on(toggleMaskUserName, (state) => {
    return { ...state, maskUserName: !state.maskUserName };
  })
);
