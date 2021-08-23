import { Component, OnInit } from '@angular/core';
import { GET_USERS, SET_USER } from '@app/store/app.actions';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@app/models/user/user.model';
import { GET_DATA } from '@app/store/app.selectors';
import { CustomColumn } from '@app/models/customColumn.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<Array<User>> = new Observable<Array<User>>();
  columns: Array<CustomColumn> = new Array<CustomColumn>();

  constructor(private store: Store<State<any>>) {
  }

  ngOnInit() {
    this.initData();
  }

  showDetails(user: User): void {
    this.store.dispatch(SET_USER({ user: user }));
  }

  initData(): void {
    this.store.dispatch(GET_USERS());
    this.users$ = this.store.select(GET_DATA);
    for (let key of Object.keys(new User())) {
      if (!key) {
        return;
      }
      this.columns.push(new CustomColumn({ label: `${key.substring(0, 1).toUpperCase()}${key.substring(1).toLowerCase()}`, prop: key }));
    }
  }
}
