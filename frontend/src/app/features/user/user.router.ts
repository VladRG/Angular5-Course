import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteGuard } from '@app/core';
import { ListUsersComponent } from './list/list.component';
import { NewUserComponent } from './new/new.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: ListUsersComponent,
    canActivate: [AppRouteGuard]
  }, {
    path: 'user/new',
    component: NewUserComponent,
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
