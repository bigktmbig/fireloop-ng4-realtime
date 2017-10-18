import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	latitude: number = 16.057683;
	longitude: number = 108.219415;
	address: string = "Chưa xác định";
	zoom: number = 13;
	radius: number = 10;
	profile: object = {};
	markers: any = [];
	constructor() {
	}

	ngOnInit() {
		this.markers.push({
			address: this.address,
			latitude: this.latitude,
			longitude: this.longitude
		});
	}

	onSubmit() {
		console.log('submited successfully!');
	}

	mapClicked($event: any) {
		this.markers.push({
			address: this.address,
			latitude: $event.coords.lat,
			longitude: $event.coords.lng
		});
	}

	removePosition(idx: number) {
		this.markers.splice(idx, 1);
	}

}

