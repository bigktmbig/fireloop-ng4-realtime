import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BigUser, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, BigUserApi } from '../../shared/sdk/services';
import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private user    	: BigUser   = new BigUser();
	private users   	: BigUser[] = new Array<BigUser>();
	private userRef 	: FireLoopRef<BigUser>;

	constructor(private rt: RealTime, private bigUserApi: BigUserApi, private cookieService: CookieService) { }

	ngOnInit() {
	}


	login(): void {
		this.bigUserApi.login(this.user
			)
		.subscribe(
			responese => {
				if(responese) {
					this.cookieService.set('Admin', responese, 'object');
				}
			},
			error => {
				console.log(error);
			});
	}

	logout(): void {
		this.bigUserApi.logout()
		.subscribe((user: BigUserApi[]) => {
			this.cookieService.delete('Admin');
		});
	}

}
