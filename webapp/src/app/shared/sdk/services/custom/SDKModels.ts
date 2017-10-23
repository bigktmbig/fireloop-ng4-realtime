/* tslint:disable */
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { BigUser } from '../../models/BigUser';
import { Customer } from '../../models/Customer';
import { Category } from '../../models/Category';
import { Supplier } from '../../models/Supplier';
import { Default } from '../../models/Default';
import { Pbs } from '../../models/Pbs';
import { Return } from '../../models/Return';
import { Service } from '../../models/Service';
import { ServiceStore } from '../../models/ServiceStore';
import { ServiceTmp } from '../../models/ServiceTmp';
import { Store } from '../../models/Store';
import { Point } from '../../models/Point';
import { Repoint } from '../../models/Repoint';
import { RepointDefault } from '../../models/RepointDefault';
import { Log } from '../../models/Log';
import { House } from '../../models/House';
import { Room } from '../../models/Room';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Todo: Todo,
    BigUser: BigUser,
    Customer: Customer,
    Category: Category,
    Supplier: Supplier,
    Default: Default,
    Pbs: Pbs,
    Return: Return,
    Service: Service,
    ServiceStore: ServiceStore,
    ServiceTmp: ServiceTmp,
    Store: Store,
    Point: Point,
    Repoint: Repoint,
    RepointDefault: RepointDefault,
    Log: Log,
    House: House,
    Room: Room,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
