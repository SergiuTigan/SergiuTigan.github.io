import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user/user.model';
import { GET_USER } from '@app/store/app.selectors';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'invicti-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: User = new User();

  constructor(private store: Store<State<any>>) {
  }

  ngOnInit(): void {
    this.store.select(GET_USER).subscribe((user: User): void => {
      this.user = user;
    });
  }

}
