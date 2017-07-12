var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('RepointDefault unit tests:', () => {
    it('Should create a RepointDefault instance', (done: Function) => {
        api.post('/repoint-defaults').send({}).expect(200, done);
    });
});
