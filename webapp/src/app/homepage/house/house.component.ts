import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

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
	private houseId		: string;

	latitude	: number = 16.057683;
	longitude	: number = 108.219415;
	address		: string = "Chưa xác định";
	name		: string = "Chưa xác định";
	zoom		: number = 13;
	radius		: number = 10;
	zero		: number = 0;

	totalRooms	: number = 0;
	roomsEmpty	: number = 0;
	roomsHire	: number = 0;

	constructor(private rt: RealTime, private houseApi: HouseApi, private roomApi: RoomApi, private cookieService: CookieService, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {

		this.activatedRoute.params.subscribe((params: Params) => {
			if(params['id']) {
				this.houseId = params['id'];
				//this.getHouseById(this.houseId);
			}
		});
		
		this.rt.onReady().subscribe(() => {
			this.houseRef = this.rt.FireLoop.ref<House>(House);
			this.roomRef = this.rt.FireLoop.ref<Room>(Room);


			this.houseRef.on('change', {
				include: 'rooms',
				where: {id: this.houseId},
				order: "id DESC"
			}).subscribe((house: House[]) => 
			{
				this.house = house[0];
			});
			this.roomRef.on('change', {
				where: {house_id: this.houseId},
				order: "id DESC"
			}).subscribe((rooms: Room[]) => 
			{
				this.rooms = rooms;
				this.totalRooms = 0;
				this.totalRooms = rooms.length;
				this.roomsEmpty = 0;
				this.roomsHire = 0;

				let rooms_length = rooms.length;
				for (var i = 0; i < rooms_length; i++) {
					if(rooms[i].status == 0) {
						this.roomsEmpty++;
					}else {
						this.roomsHire++;
					}
				}
			});
		});
	}

	getHouseById(id: any): void {
		this.houseApi.findById(id, {
			include: [
			{
				relation: 'rooms',
				scope: { order: 'id DESC' }
			}
			]
		}).subscribe((house: House) => {
			this.house = house;
		});
	}

	mapClicked($event: any) {
		this.house.latitude = $event.coords.lat;
		this.house.longitude = $event.coords.lng;
		this.house.owner_id = JSON.parse(this.cookieService.get('User')).userId;

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
		delete this.room.id;
		this.room.name = this.name;
		this.room.square = 0;
		this.room.cost = "0";
		this.room.note = "";
		this.room.house_id = this.houseId;
		this.room.owner_id = JSON.parse(this.cookieService.get('User')).userId;

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
