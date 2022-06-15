import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { UserService } from '@services/user.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyGuardService implements CanActivate {
  constructor(private router: Router, private user: UserService) {}

  public canActivate(): boolean | UrlTree {
    const userNotVerified = this.user.isAuthenticated && !this.user.data.active;
    return userNotVerified ? true : this.router.parseUrl('/dashboard');
  }
}
