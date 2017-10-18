import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BigUser, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, BigUserApi } from '../../shared/sdk/services';
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	private user    	: BigUser   = new BigUser();
	private users   	: BigUser[] = new Array<BigUser>();
	private userRef 	: FireLoopRef<BigUser>;

	constructor(private rt: RealTime, private bigUserApi: BigUserApi) { }

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

}
