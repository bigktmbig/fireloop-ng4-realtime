import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { House, Room, FireLoopRef } from '../../shared/sdk/models';
import { RealTime, HouseApi, RoomApi } from '../../shared/sdk/services';
import { CookieService } from 'ngx-cookie-service';
@Component({
	selector: 'app-house',
	templateUrl: './house.component.html',
	styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
	private house    	: House   = new House();
	private houses   	: House[] = new Array<House>();
	private houseRef 	: FireLoopRef<House>;

	private room    	: Room   = new Room();
	private rooms   	: Room[] = new Array<Room>();
	private roomRef 	: FireLoopRef<Room>;

	latitude	: number = 16.057683;
	longitude	: number = 108.219415;
	address		: string = "Chưa xác định";
	name		: string = "Chưa xác định";
	zoom		: number = 13;
	radius		: number = 10;
	zero		: number = 0;

	constructor(private rt: RealTime, private houseApi: HouseApi, private roomApi: RoomApi, private cookieService: CookieService) { }

	ngOnInit() {
		this.rt.onReady().subscribe(() => {
			this.houseRef = this.rt.FireLoop.ref<House>(House);
			this.roomRef = this.rt.FireLoop.ref<Room>(Room);


			this.houseRef.on('change', {
				where: {_id: "59ef0608bfe0912478f9605c"},
				order: "id DESC"
			}).subscribe((house: House) => 
			{
				console.log(house);
				this.house = house;
			});
			this.roomRef.on('change', {
				where: {house_id: "59ef0608bfe0912478f9605c"},
				order: "id DESC"
			}).subscribe((rooms: Room[]) => 
			{
				this.rooms = rooms;
			});
		});
	}

	mapClicked($event: any) {
		this.house.latitude = $event.coords.lat;
		this.house.longitude = $event.coords.lng;
		this.house.owner_id = JSON.parse(this.cookieService.get('User')).id;

		this.houseRef.upsert(this.house).subscribe((res: any) => {
			console.log(res);
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

	createRoom() {
		this.room.name = this.name;
		this.room.square = 0;
		this.room.cost = "0";
		this.room.note = "";
		this.room.house_id = "59ef0608bfe0912478f9605c";
		this.room.owner_id = JSON.parse(this.cookieService.get('User')).id;

		this.roomRef.create(this.room).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

	editRoom(room: Room): void {
		this.roomRef.upsert(room).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

	removeRoom(room: Room) {
		this.roomRef.remove(room).subscribe((res: any) => {
			//console.log(res);
		},
		err => {
			console.log(err);
		});
	}

}
