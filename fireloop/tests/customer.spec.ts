var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Customer unit tests:', () => {
    it('Should create a Customer instance', (done: Function) => {
        api.post('/customers').send({}).expect(200, done);
    });
});
