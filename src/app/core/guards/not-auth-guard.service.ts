import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(
    /* eslint-disable @typescript-eslint/no-unused-vars */
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree {
    return this.authService.isAuthenticated ? this.router.parseUrl('/dashboard') : true;
  }
}
