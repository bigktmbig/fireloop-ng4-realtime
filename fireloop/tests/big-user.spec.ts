var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('BigUser unit tests:', () => {
    it('Should create a BigUser instance', (done: Function) => {
        api.post('/big-users').send({}).expect(200, done);
    });
});
