import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './user.router';
import { ListUsersComponent } from './list/list.component';
import { NewUserComponent } from './new/new.component';
import { EditUserComponent } from '@app/features/user/edit/edit.component';
import { UserFormComponent } from '@app/features/user/form/form.component';
import { UsersResolver } from '@app/features/user/user.resolver';


@NgModule({
  declarations: [
    ListUsersComponent,
    NewUserComponent,
    EditUserComponent,
    UserFormComponent
  ],
  providers: [
    UsersResolver
  ],
  imports: [
    AppSharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
