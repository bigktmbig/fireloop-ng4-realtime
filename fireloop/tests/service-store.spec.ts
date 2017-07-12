var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('ServiceStore unit tests:', () => {
    it('Should create a ServiceStore instance', (done: Function) => {
        api.post('/service-stores').send({}).expect(200, done);
    });
});
