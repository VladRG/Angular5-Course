import { Component, OnInit } from '@angular/core';
import { menuLinks } from './menu-links';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  headerHeight = 300;
  menuLinks: Array<MenuLinkItem>;

  ngOnInit() {
    this.menuLinks = menuLinks.slice();
  }

  logLogin(username) {
    console.log(username);
  }
}

export class MenuLinkItem {
  label: string;
  url: string;
}
