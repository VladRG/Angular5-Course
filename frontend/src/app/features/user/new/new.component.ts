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

  user: User;
  message = '';

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.service.store(this.user).subscribe(
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

  log(el){
    console.log(el);
  }

  checkPassword(password, confirm){
    return password.value === confirm.value;
  }
}
