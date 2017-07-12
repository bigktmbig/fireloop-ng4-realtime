var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Repoint unit tests:', () => {
    it('Should create a Repoint instance', (done: Function) => {
        api.post('/repoints').send({}).expect(200, done);
    });
});
