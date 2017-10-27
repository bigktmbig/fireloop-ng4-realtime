import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { House, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, HouseApi } from '../../shared/sdk/services';

declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	private houses   	: House[] = new Array<House>();
	private houseRef 	: FireLoopRef<House>;

	lat: number = 16.057683;
	lng: number = 108.219415;
	zoom: number = 13;
	radius: number = 10;

	constructor(private rt: RealTime, private houseApi: HouseApi) { }

	ngOnInit() {
		this.houseRef = this.rt.FireLoop.ref<House>(House);
		this.houseRef.on('change').subscribe((houses: House[]) => 
		{
			this.houses = houses;
		});
	}

}
