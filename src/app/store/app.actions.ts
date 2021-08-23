import { createAction, props } from '@ngrx/store';
import { User } from '@app/models/user/user.model';
import { HttpErrorResponse } from '@angular/common/http';

export const DATA_IS_LOADED = createAction(
  '[Main] Data Is Loaded',
  props<{ status: boolean }>()
);
export const GET_USERS = createAction(
  '[Main] Get Users'
);
export const SET_USER = createAction(
  '[Main] Get Users',
  props<{user: User}>()
);
export const GET_USERS_SUCCESS = createAction(
  '[Main] Get Users Success',
  props<{ data: Array<User> }>()
);
export const GET_USERS_ERROR = createAction(
  '[Main] Get Users Success',
  props<{ error: HttpErrorResponse }>()
);
