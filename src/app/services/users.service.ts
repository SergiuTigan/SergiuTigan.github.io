import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ENVIRONMENT } from '@env/environment';
import { Injectable } from '@angular/core';
import { User, UserModel } from '../models/user/user.model';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private ngxLogger: NGXLogger
  ) {
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get(`${ENVIRONMENT.BASE_URL}/users`)
      .pipe(map(this.mapUsers),
        catchError((err: HttpErrorResponse): Observable<Array<User>> => {
          this.ngxLogger.error('Error message: ', err.message);
          return of(new Array<User>());
        })
      );
  }

  private mapUsers = (usersResponse: any): Array<User> => {
    return usersResponse.map((item: UserModel): User => User.parseDto(item));
  };
}
