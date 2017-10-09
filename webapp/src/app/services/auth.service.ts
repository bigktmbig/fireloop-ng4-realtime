import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { BigUserApi } from '../shared/sdk/services';


import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthService implements CanActivate {
	cookieUser: Object;

	constructor(private router: Router,private bigUserApi: BigUserApi, private cookieService: CookieService) {

	}

	canActivate() {
		if(this.cookieService.check('User')) {
			if (this.bigUserApi.isAuthenticated()) {
				return true;
			} else {
				this.router.navigate(['/todo']);
				return false;
			}
		}
	}

}
