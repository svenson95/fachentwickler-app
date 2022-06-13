import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.userIsAdmin(state.url);
  }

  private userIsAdmin(url: string): boolean | UrlTree {
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    if (this.auth.isAuthenticated && this.auth.user.role === UserRole.ADMIN) {
      return true;
    }

    return false;
  }
}
