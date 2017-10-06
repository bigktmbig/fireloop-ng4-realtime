/* tslint:disable */

declare var Object: any;
export interface RepointDefaultInterface {
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class RepointDefault implements RepointDefaultInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: RepointDefaultInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RepointDefault`.
   */
  public static getModelName() {
    return "RepointDefault";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RepointDefault for dynamic purposes.
  **/
  public static factory(data: RepointDefaultInterface): RepointDefault{
    return new RepointDefault(data);
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
      name: 'RepointDefault',
      plural: 'RepointDefaults',
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
