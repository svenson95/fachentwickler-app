import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private auth: AuthService, private user: UserService) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.userIsAllowedNavigateTo(state.url);
  }

  private userIsAllowedNavigateTo(url: string): boolean | UrlTree {
    this.auth.redirectUrl = url;

    if (!this.user.isAuthenticated) {
      return this.router.parseUrl('/login');
    }

    const userIsVerified = this.user.data.active;

    if (userIsVerified) {
      return true;
    } else if (!userIsVerified) {
      return this.router.parseUrl('/verifizieren');
    }
    if (url.includes('info_2020_11_42')) {
      return true;
    }
    return false;
  }
}
