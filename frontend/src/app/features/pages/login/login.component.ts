import { Component, OnInit } from '@angular/core';
import { Credentials } from '@app/models';
import { AuthService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: Credentials;
  message = '';

  constructor(private service: AuthService) {
    this.credentials = new Credentials();
  }

  login() {
    this.service.login(this.credentials)
      .subscribe((response: Credentials) => {
        this.service.setUser(response);
      }, errorResponse => {
        this.message = errorResponse.error;
      });
  }

  ngOnInit() { }

  getIsRequired(element) {
    return element.errors && element.errors.required;
  }

  reset() {
    this.message = '';
  }

  getHasMinLength(element) {
    return element.errors && element.errors.minlength;
  }

  logMe(me) {
    console.log(me);
  }
}
