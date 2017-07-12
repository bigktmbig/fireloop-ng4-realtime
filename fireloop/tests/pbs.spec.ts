var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Pbs unit tests:', () => {
    it('Should create a Pbs instance', (done: Function) => {
        api.post('/pbs').send({}).expect(200, done);
    });
});
