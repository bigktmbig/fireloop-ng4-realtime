import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BigUser, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, BigUserApi } from '../../shared/sdk/services';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private user    	: BigUser   = new BigUser();
	private users   	: BigUser[] = new Array<BigUser>();

	isLogin		?: boolean = false;
	constructor(private bigUserApi: BigUserApi, private cookieService: CookieService, private router: Router) { }

	ngOnInit() {
		if(this.cookieService.get('User')){
			this.isLogin = true;
		}
	}

	logout(): void {
		console.log();
		this.bigUserApi.logout()
		.subscribe((user: BigUserApi[]) => {
			this.cookieService.delete('User');
			this.router.navigate(['/login']);
		});
	}

}
