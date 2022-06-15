import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { UserService } from '@services/user.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuardService implements CanActivate {
  constructor(private router: Router, private user: UserService) {}

  public canActivate(): boolean | UrlTree {
    return this.user.isAuthenticated ? this.router.parseUrl('/dashboard') : true;
  }
}
