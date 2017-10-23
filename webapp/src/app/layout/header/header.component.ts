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
	private userRef 	: FireLoopRef<BigUser>;

	isLogin		?: boolean = false;
	constructor(private rt: RealTime, private bigUserApi: BigUserApi, private cookieService: CookieService, private router: Router) { }

	ngOnInit() {
		this.rt.onReady().subscribe(() => {
			this.userRef = this.rt.FireLoop.ref<BigUser>(BigUser);

			if(this.bigUserApi.isAuthenticated()){
				this.isLogin = true;
			}
		});
	}

	logout(): void {
		this.bigUserApi.logout()
		.subscribe((user: BigUserApi[]) => {
			this.cookieService.delete('User');
			this.router.navigate(['/login']);
		});
	}

}
