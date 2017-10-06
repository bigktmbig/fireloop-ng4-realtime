/* tslint:disable */

declare var Object: any;
export interface ServiceStoreInterface {
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class ServiceStore implements ServiceStoreInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ServiceStoreInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceStore`.
   */
  public static getModelName() {
    return "ServiceStore";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceStore for dynamic purposes.
  **/
  public static factory(data: ServiceStoreInterface): ServiceStore{
    return new ServiceStore(data);
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
      name: 'ServiceStore',
      plural: 'ServiceStores',
      properties: {
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
      }
    }
  }
}
