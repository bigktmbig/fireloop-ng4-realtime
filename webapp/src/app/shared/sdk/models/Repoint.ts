/* tslint:disable */

declare var Object: any;
export interface RepointInterface {
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Repoint implements RepointInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: RepointInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Repoint`.
   */
  public static getModelName() {
    return "Repoint";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Repoint for dynamic purposes.
  **/
  public static factory(data: RepointInterface): Repoint{
    return new Repoint(data);
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
      name: 'Repoint',
      plural: 'Repoints',
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
