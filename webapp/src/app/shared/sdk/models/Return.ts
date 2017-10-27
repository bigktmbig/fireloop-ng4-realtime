/* tslint:disable */

declare var Object: any;
export interface ReturnInterface {
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Return implements ReturnInterface {
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ReturnInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Return`.
   */
  public static getModelName() {
    return "Return";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Return for dynamic purposes.
  **/
  public static factory(data: ReturnInterface): Return{
    return new Return(data);
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
      name: 'Return',
      plural: 'returns',
      properties: {
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
      }
    }
  }
}
