import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from '@app/models';
import { UserService } from '@app/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = [];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.get().subscribe((response: UserResponse) => {
      this.users = response.data as Array<User>;
    });
  }

}
