import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: Credentials;

  constructor() {
    this.credentials = new Credentials();
  }

  login(username, password) {
    console.log(username);
    console.log(password);
  }

  ngOnInit() { }

  getIsRequired(element) {
    return element.errors && element.errors.required;
  }

  getHasMinLength(element) {
    return element.errors && element.errors.minlength;
  }

  logMe(me) {
    console.log(me);
  }
}
