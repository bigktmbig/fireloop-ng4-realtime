/* tslint:disable */

declare var Object: any;
export interface PbsInterface {
  "id"?: number;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Pbs implements PbsInterface {
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: PbsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pbs`.
   */
  public static getModelName() {
    return "Pbs";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pbs for dynamic purposes.
  **/
  public static factory(data: PbsInterface): Pbs{
    return new Pbs(data);
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
      name: 'Pbs',
      plural: 'Pbs',
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
