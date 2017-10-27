/* tslint:disable */

declare var Object: any;
export interface SupplierInterface {
  "code"?: string;
  "name"?: string;
  "create"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Supplier implements SupplierInterface {
  "code": string;
  "name": string;
  "create": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: SupplierInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Supplier`.
   */
  public static getModelName() {
    return "Supplier";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Supplier for dynamic purposes.
  **/
  public static factory(data: SupplierInterface): Supplier{
    return new Supplier(data);
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
      name: 'Supplier',
      plural: 'Suppliers',
      properties: {
        "code": {
          name: 'code',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "create": {
          name: 'create',
          type: 'string'
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
      }
    }
  }
}
