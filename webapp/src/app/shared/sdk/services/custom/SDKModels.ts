/* tslint:disable */
import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Note } from '../../models/Note';
import { BigUser } from '../../models/BigUser';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Todo: Todo,
    Note: Note,
    BigUser: BigUser,
    
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
