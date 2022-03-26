import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.userIsAuthenticated(state.url);
  }

  /* -- Auth validation on route load -- */
  userIsAuthenticated(url: string): boolean | UrlTree {

    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    if (this.auth.isAuthenticated && this.auth.user.active || this.isTestDataRequest(url)) {
      return true;
    } else if (this.auth.isAuthenticated && !this.auth.user.active) {
      return this.router.parseUrl('/verify');
    } else if (!this.auth.isAuthenticated) {
      return this.router.parseUrl('/login');
    }

  }

  isTestDataRequest(url: string): boolean {
    if (url.includes('info_2020_11_42')) {
      return true;
    }
  }

}