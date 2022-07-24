import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { UserData } from '@models/user';
import { UserService } from '@services/user.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyGuardService implements CanActivate {
  private userData: UserData;

  constructor(private router: Router, private user: UserService) {
    this.user.data$.subscribe((data) => {
      this.userData = data;
    });
  }

  public canActivate(): boolean | UrlTree {
    const userNotVerified = this.user.isAuthenticated && !this.userData.active;
    return userNotVerified ? true : this.router.parseUrl('/dashboard');
  }
}
