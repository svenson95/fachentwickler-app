import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserData, UserRole } from '@models/user';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  private userData: UserData;

  constructor(private auth: AuthService, private user: UserService) {
    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.userIsAdmin(state.url);
  }

  private userIsAdmin(url: string): boolean | UrlTree {
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;

    if (this.user.isAuthenticated && this.userData.role === UserRole.ADMIN) {
      return true;
    }

    return false;
  }
}
