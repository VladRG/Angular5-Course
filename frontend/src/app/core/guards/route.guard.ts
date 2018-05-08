import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@app/core/services';

@Injectable()
export class AppRouteGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (this.service.isLoggedIn()) {
      return true;
    }

    this.router.navigateByUrl('about');
    return false;
  }
}
