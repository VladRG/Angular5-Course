import { Component, OnInit, HostListener } from '@angular/core';
import { menuLinks } from './menu-links';
import { MenuLinkItem } from '../models/MenuLink';
import { ScreenService } from '@app/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor(public service: ScreenService) { }

  menuLinks: Array<MenuLinkItem>;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onWindowResize(width) {
    this.service.setType(width);
  }

  onScroll(event) {
    // on scroll
  }

  ngOnInit() {
    this.menuLinks = menuLinks.slice();
  }
}
