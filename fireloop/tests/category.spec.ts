var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Category unit tests:', () => {
    it('Should create a Category instance', (done: Function) => {
        api.post('/categories').send({}).expect(200, done);
    });
});