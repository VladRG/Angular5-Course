import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuLinkItem } from '@app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input()
  links: Array<MenuLinkItem>;

  @Output()
  onLogin: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.links);
    const copiedLinks = Object.assign({}, this.links);
  }

  login() {
    this.onLogin.emit('admin');
  }
}
