import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  @Input()
  user: User;

  @Output()
  onSave: EventEmitter<User> = new EventEmitter();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    if (!this.user) {
      this.user = new User();
    }
  }

  save() {
    this.onSave.emit(this.user);
  }

  cancel() {
    this.onCancel.emit();
  }

  checkPassword(password, confirm) {
    return password.value === confirm.value;
  }
}
