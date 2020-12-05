import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | Observable<boolean
    | UrlTree>
    | Promise<boolean
    | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    this.router.navigateByUrl('/login');
    return false;
  }
}
