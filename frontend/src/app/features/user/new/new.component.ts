import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { UserService } from '@app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  message = '';

  ngOnInit() {

  }

  save(user: User) {
    this.service.store(user).subscribe(
      (response: any) => {
        this.redirectToList();
      },
      (errorResponse) => {
        this.message = errorResponse.error;
      }
    );
  }

  cancel() {
    this.redirectToList();
  }

  private redirectToList() {
    this.router.navigateByUrl('user');
  }
}
