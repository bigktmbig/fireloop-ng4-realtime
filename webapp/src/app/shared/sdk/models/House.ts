/* tslint:disable */
import {
  BigUser,
  Room
} from '../index';

declare var Object: any;
export interface HouseInterface {
  "name": string;
  "address": string;
  "latitude": number;
  "longitude": number;
  "radius"?: number;
  "owner_id": any;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  user?: BigUser;
  rooms?: Room[];
}

export class House implements HouseInterface {
  "name": string;
  "address": string;
  "latitude": number;
  "longitude": number;
  "radius": number;
  "owner_id": any;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  user: BigUser;
  rooms: Room[];
  constructor(data?: HouseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `House`.
   */
  public static getModelName() {
    return "House";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of House for dynamic purposes.
  **/
  public static factory(data: HouseInterface): House{
    return new House(data);
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
      name: 'House',
      plural: 'houses',
      properties: {
        "name": {
          name: 'name',
          type: 'string',
          default: 'my house'
        },
        "address": {
          name: 'address',
          type: 'string',
          default: '666 Ngo quyen'
        },
        "latitude": {
          name: 'latitude',
          type: 'number',
          default: 16.057683
        },
        "longitude": {
          name: 'longitude',
          type: 'number',
          default: 108.219415
        },
        "radius": {
          name: 'radius',
          type: 'number',
          default: 10
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
        user: {
          name: 'user',
          type: 'BigUser',
          model: 'BigUser'
        },
        rooms: {
          name: 'rooms',
          type: 'Room[]',
          model: 'Room'
        },
      }
    }
  }
}
