import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { BigUserApi } from './sdk/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private bigUserApi: BigUserApi) {

  }

  canActivate() {
    if (this.bigUserApi.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/admin']);
      return false;
    }
  }
}