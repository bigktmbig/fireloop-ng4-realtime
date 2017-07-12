var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('ServiceTmp unit tests:', () => {
    it('Should create a ServiceTmp instance', (done: Function) => {
        api.post('/service-tmps').send({}).expect(200, done);
    });
});
