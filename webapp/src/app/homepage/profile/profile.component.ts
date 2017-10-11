import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	lat: number = 16.057683;
	lng: number = 108.219415;
	zoom: number = 13;
	radius: number = 10;
	profile: object = {};
	markers: any = [];
	constructor() {
	}

	ngOnInit() {
		this.markers.push({
			lat: this.lat,
			lng: this.lng
		});
	}

	onSubmit() {
		console.log('submited successfully!');
	}

	mapClicked($event: any) {
		this.markers.push({
			lat: $event.coords.lat,
			lng: $event.coords.lng
		});
	}

}

