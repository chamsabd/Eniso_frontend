// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Your authentication logic here
    const isLoggedIn = this.checkIfLoggedIn();

    if (!isLoggedIn) {
      // Redirect to the login page or another route if not logged in
      return this.router.createUrlTree(['/auth/login']);
    }

    return true;
  }

  private checkIfLoggedIn(): boolean {
    // Your authentication logic, e.g., checking localStorage
    const loggedIn = localStorage.getItem('auth_app_token')?true:false;
    return loggedIn;
  }
}
