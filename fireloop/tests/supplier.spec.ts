var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Supplier unit tests:', () => {
    it('Should create a Supplier instance', (done: Function) => {
        api.post('/suppliers').send({}).expect(200, done);
    });
});
