import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BigUser, FireLoopRef } from '../shared/sdk/models';
import { RealTime, BigUserApi } from '../shared/sdk/services';

import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	private user    	: BigUser   = new BigUser();
	private users   	: BigUser[] = new Array<BigUser>();
	private userRef 	: FireLoopRef<BigUser>;

	email		: String;
	password	: String;

	constructor(private rt: RealTime, private bigUserApi: BigUserApi, private cookieService: CookieService) {

	}

	ngOnInit() {
		this.rt.onReady().subscribe(() => {
			this.userRef = this.rt.FireLoop.ref<BigUser>(BigUser);
			this.userRef.on('change').subscribe((users: BigUser[]) => this.users = users);
		});
	}

	create(): void {
		this.userRef.create(this.user).subscribe((res: any) => {
			console.log(res);
		});
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
