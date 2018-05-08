import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  credentials: {
    username: string,
    password: string
  };

  constructor() { 
    this.credentials = {
      username: '',
      password: ''
    };
  }

  login(loginForm) {
    console.log();
  }

  ngOnInit() {
  }

}
