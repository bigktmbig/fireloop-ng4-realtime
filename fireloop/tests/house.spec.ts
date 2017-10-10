var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('House unit tests:', () => {
    it('Should create a House instance', (done: Function) => {
        api.post('/houses').send({
            name: 'test',
            address: 'test',
            latitude: 12345,
            longitude: 12345,
            radius: 12345,
            owner_id: 'test'
        }).expect(200, done);
    });
});
