var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('default unit tests:', () => {
    it('Should create a default instance', (done: Function) => {
        api.post('/defaults').send({}).expect(200, done);
    });
});