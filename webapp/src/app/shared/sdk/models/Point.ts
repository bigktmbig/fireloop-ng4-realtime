/* tslint:disable */

declare var Object: any;
export interface PointInterface {
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class Point implements PointInterface {
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: PointInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Point`.
   */
  public static getModelName() {
    return "Point";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Point for dynamic purposes.
  **/
  public static factory(data: PointInterface): Point{
    return new Point(data);
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
      name: 'Point',
      plural: 'Points',
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
