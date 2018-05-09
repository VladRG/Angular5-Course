import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteGuard } from '@app/core';
import { ListUsersComponent } from './list/list.component';
import { NewUserComponent } from './new/new.component';
import { EditUserComponent } from './edit/edit.component';
import { UsersResolver } from '@app/features/user/user.resolver';

const userRoutes: Routes = [
  {
    path: 'user',
    component: ListUsersComponent,
    canActivate: [AppRouteGuard],
    // resolve: {
    //   users: UsersResolver
    // }
  }, {
    path: 'user/new',
    component: NewUserComponent,
    canActivate: [AppRouteGuard],
    data: {
      pageName: 'Create User'
    }
  },
  {
    path: 'user/:id',
    component: EditUserComponent,
    canActivate: [AppRouteGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
