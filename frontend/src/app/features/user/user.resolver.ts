

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserResponse } from '@app/models';
import { Observable } from 'rxjs/observable';
import { UserService } from '@app/core';

@Injectable()
export class UsersResolver implements Resolve<UserResponse> {
  constructor(private service: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UserResponse> {
    return this.service.get(0, 10);
  }
}

// vlad.gheorghita@itadviser.ro
