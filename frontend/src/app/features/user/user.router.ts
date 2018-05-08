import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteGuard } from '@app/core';
import { ListUsersComponent } from './list/list.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: ListUsersComponent,
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
