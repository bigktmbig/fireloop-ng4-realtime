import { Model } from '@mean-expert/model';
/**
* @module BigUser
* @description
* Write a useful BigUser Model description.
* Register hooks and remote methods within the
* Model Decorator
**/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' },
    afterRemote: { name: 'login', type: 'afterRemote' }
  },
  remotes: {
    myRemote: {
      returns : { arg: 'result', type: 'array' },
      http    : { path: '/my-remote', verb: 'get' }
    }
  }
})

class BigUser {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {}

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    console.log('BigUser: Before Save');
    next();
  }
  // Example Remote Method
  myRemote(next: Function): void {
    this.model.find(next);
  }

  //login
  afterRemote(ctx: any, userlogin: any, next: Function): void {
    console.log(123);
    console.log(ctx.result);
    if (ctx.result.userId) {
      this.model.findById(ctx.result.userId, (err: any, client: any) => {
        if (err) throw err;
        var arrRoles = ['member'];
        client.roles((err: any, roles: any) => {
          if (roles.length > 0) {
            roles.map((item: any) => {
              arrRoles.push(item.name);
            });
          }
          ctx.result.roles = arrRoles.filter((n) => {
            return n != undefined;
          });
          next();
        });
      });
    }else {
      next();
    }
  };
}

module.exports = BigUser;
