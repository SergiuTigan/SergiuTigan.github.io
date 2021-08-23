import { createReducer, on } from '@ngrx/store';
import { GET_USERS_ERROR, GET_USERS_SUCCESS, SET_USER } from './app.actions';
import { User } from '@app/models/user/user.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface AppState {
  data: Array<User>;
  error: HttpErrorResponse;
  user: User;
}

const initialState: AppState = {
  data: new Array<User>(),
  error: new HttpErrorResponse({}),
  user: new User()
};
export const APP_REDUCER = createReducer<AppState>(
  initialState,
  on(GET_USERS_SUCCESS, (state: AppState, action: { data: Array<User> }): AppState => {
    return {
      ...state,
      data: action.data
    };
  }),
  on(GET_USERS_ERROR, (state: AppState, action: { error: HttpErrorResponse }): AppState => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(SET_USER, (state: AppState, action: { user: User }): AppState => {
    return {
      ...state,
      user: action.user
    };
  })
);
