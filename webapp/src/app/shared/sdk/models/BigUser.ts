/* tslint:disable */
import {
  House
} from '../index';

declare var Object: any;
export interface BigUserInterface {
  "name"?: string;
  "code"?: string;
  "phone"?: string;
  "onOff"?: boolean;
  "firstName"?: string;
  "lastName"?: string;
  "realm"?: string;
  "username"?: string;
  "password": string;
  "email": string;
  "emailVerified"?: boolean;
  "verificationToken"?: string;
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  accessTokens?: any[];
  roles?: any[];
  houses?: House[];
}

export class BigUser implements BigUserInterface {
  "name": string;
  "code": string;
  "phone": string;
  "onOff": boolean;
  "firstName": string;
  "lastName": string;
  "realm": string;
  "username": string;
  "password": string;
  "email": string;
  "emailVerified": boolean;
  "verificationToken": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  accessTokens: any[];
  roles: any[];
  houses: House[];
  constructor(data?: BigUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BigUser`.
   */
  public static getModelName() {
    return "BigUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BigUser for dynamic purposes.
  **/
  public static factory(data: BigUserInterface): BigUser{
    return new BigUser(data);
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
      name: 'BigUser',
      plural: 'big-users',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "onOff": {
          name: 'onOff',
          type: 'boolean'
        },
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "verificationToken": {
          name: 'verificationToken',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
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
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: ''
        },
        houses: {
          name: 'houses',
          type: 'House[]',
          model: 'House'
        },
      }
    }
  }
}
