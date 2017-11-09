/* tslint:disable */
import {
  House,
  BigUser
} from '../index';

declare var Object: any;
export interface RoomInterface {
  "name": string;
  "square"?: number;
  "status"?: number;
  "cost": string;
  "note"?: string;
  "number_of_people"?: number;
  "is_toilet"?: boolean;
  "house_id": any;
  "owner_id": any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  house?: House;
  user?: BigUser;
}

export class Room implements RoomInterface {
  "name": string;
  "square": number;
  "status": number;
  "cost": string;
  "note": string;
  "number_of_people": number;
  "is_toilet": boolean;
  "house_id": any;
  "owner_id": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  house: House;
  user: BigUser;
  constructor(data?: RoomInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Room`.
   */
  public static getModelName() {
    return "Room";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Room for dynamic purposes.
  **/
  public static factory(data: RoomInterface): Room{
    return new Room(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Room',
      plural: 'rooms',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "square": {
          name: 'square',
          type: 'number',
          default: 0
        },
        "status": {
          name: 'status',
          type: 'number',
          default: 0
        },
        "cost": {
          name: 'cost',
          type: 'string',
          default: '0'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "number_of_people": {
          name: 'number_of_people',
          type: 'number'
        },
        "is_toilet": {
          name: 'is_toilet',
          type: 'boolean'
        },
        "house_id": {
          name: 'house_id',
          type: 'any'
        },
        "owner_id": {
          name: 'owner_id',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
        house: {
          name: 'house',
          type: 'House',
          model: 'House'
        },
        user: {
          name: 'user',
          type: 'BigUser',
          model: 'BigUser'
        },
      }
    }
  }
}
