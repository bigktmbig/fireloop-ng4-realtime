import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { House, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, HouseApi } from '../../shared/sdk/services';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	private house    	: House   = new House();
	private houses   	: House[] = new Array<House>();
	private houseRef 	: FireLoopRef<House>;

	latitude: number = 16.057683;
	longitude: number = 108.219415;
	address: string = "Chưa xác định";
	name: string = "Chưa xác định";
	zoom: number = 13;
	radius: number = 10;

	constructor(private rt: RealTime, private houseApi: HouseApi, private cookieService: CookieService) {
	}

	ngOnInit() {
		this.rt.onReady().subscribe(() => {
			this.houseRef = this.rt.FireLoop.ref<House>(House);
			this.houseRef.on('change').subscribe((houses: House[]) => 
			{
				this.houses = houses;
			});
		});
	}

	onSubmit() {
		console.log('submited successfully!');
	}

	mapClicked($event: any) {
		delete this.house.id;
		this.house.name = this.name;
		this.house.address = this.address;
		this.house.latitude = $event.coords.lat;
		this.house.longitude = $event.coords.lng;
		this.house.owner_id = JSON.parse(this.cookieService.get('User')).userId;

		this.houseRef.create(this.house).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

	editHouse(house: House): void {
		this.houseRef.upsert(house).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

	removeHouse(house: House) {
		this.houseRef.remove(house).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

}

