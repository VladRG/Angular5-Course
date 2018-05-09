import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './user.router';
import { ListUsersComponent } from './list/list.component';
import { NewUserComponent } from './new/new.component';
import { EditUserComponent } from '@app/features/user/edit/edit.component';
import { UserFormComponent } from '@app/features/user/form/form.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    NewUserComponent,
    EditUserComponent,
    UserFormComponent
  ],
  imports: [
    AppSharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
