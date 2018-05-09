import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuLinkItem } from '@app/models';
import { AuthService, ScreenService } from '@app/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input()
  links: Array<MenuLinkItem>;

  constructor(
    public service: AuthService,
    public screenService: ScreenService,
    private router: Router,
  ) {

  }

  logout() {
    this.service.logout();
    this.router.navigateByUrl('login');
  }

  ngOnInit() {

  }
}
