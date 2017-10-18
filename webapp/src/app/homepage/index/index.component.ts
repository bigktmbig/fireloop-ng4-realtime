import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	lat: number = 16.057683;
	lng: number = 108.219415;
	zoom: number = 13;
	radius: number = 10;

	constructor() { }

	ngOnInit() {
	}

}
