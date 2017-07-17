import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { BigUserApi } from '../shared/sdk/services';


import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthAdminService implements CanActivate {
	cookieUser: any = {roles: []};
	arrRoles: any;

	constructor(private router: Router,private bigUserApi: BigUserApi, private cookieService: CookieService) {

	}

	canActivate() {
		if(this.cookieService.check('User')) {
			this.cookieUser = this.cookieService.get('User', 'object');
			if(this.cookieUser && this.cookieUser.roles) {
				this.arrRoles = this.cookieUser.roles.filter((val: string) => {
					return ['admin'].indexOf(val) !== -1;
				});
				if (this.arrRoles.length > 0) {
					return true;
				}else {
					this.router.navigate(['/admin']);
					return false;
				}
			}else {
				this.router.navigate(['/admin']);
				return false;
			}
		}
	}

}
