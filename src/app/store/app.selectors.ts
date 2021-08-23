import { AppState } from './app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '@app/models/user/user.model';

const getLoadingState = createFeatureSelector<AppState>('state');

export const GET_DATA = createSelector(
  getLoadingState,
  (state: AppState): Array<User> => state.data
);
export const GET_USER = createSelector(
  getLoadingState,
  (state: AppState): User => state.user
);
