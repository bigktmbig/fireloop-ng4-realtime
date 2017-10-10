import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	lat: number = 16.057683;
	lng: number = 108.219415;
	zoom: number = 13;
	radius: number = 10;

	constructor() { }

	ngOnInit() {
	}

}
