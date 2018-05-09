import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './user.router';
import { ListUsersComponent } from './list/list.component';
import { NewUserComponent } from './new/new.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    NewUserComponent
  ],
  imports: [
    AppSharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
