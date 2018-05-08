import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './user.router';
import { ListUsersComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    AppSharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
