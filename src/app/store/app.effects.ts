import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, ObservableInput} from 'rxjs';
import * as OrderActions from './app.actions';
import { State, Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { UsersService } from '@app/services/users.service';

@Injectable()
export class AppEffects {
  loadUsers$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(OrderActions.GET_USERS),
      mergeMap((action: any): Observable<Array<User>> => {
        return this.usersService.getUsers().pipe(map((data: Array<User>): any => OrderActions.GET_USERS_SUCCESS({ data: data })));
      }),
      catchError((error: HttpErrorResponse): ObservableInput<void> => {
        console.log(error);
        return new Observable();
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<State<any>>,
    private usersService: UsersService
  ) {
  }
}
