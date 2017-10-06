/* tslint:disable */

declare var Object: any;
export interface ServiceTmpInterface {
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class ServiceTmp implements ServiceTmpInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ServiceTmpInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceTmp`.
   */
  public static getModelName() {
    return "ServiceTmp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceTmp for dynamic purposes.
  **/
  public static factory(data: ServiceTmpInterface): ServiceTmp{
    return new ServiceTmp(data);
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
      name: 'ServiceTmp',
      plural: 'ServiceTmps',
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
