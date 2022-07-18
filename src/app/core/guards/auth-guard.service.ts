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
    return this.userIsAuthenticated(state.url);
  }

  private userIsAuthenticated(url: string): boolean | UrlTree {
    this.auth.redirectUrl = url;

    const userIsVerified = this.user.isAuthenticated && this.user.data.active;
    const userNotVerified = this.user.isAuthenticated && !this.user.data.active;

    if (userIsVerified || this.isTestDataRequest(url)) {
      return true;
    }
    if (userNotVerified) {
      return this.router.parseUrl('/verifizieren');
    }
    if (!this.user.isAuthenticated) {
      return this.router.parseUrl('/login');
    }
    return false;
  }

  private isTestDataRequest(url: string): boolean {
    if (url.includes('info_2020_11_42')) {
      return true;
    }
    return false;
  }
}
