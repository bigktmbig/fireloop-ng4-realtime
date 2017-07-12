var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Store unit tests:', () => {
    it('Should create a Store instance', (done: Function) => {
        api.post('/stores').send({}).expect(200, done);
    });
});
