var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('Room unit tests:', () => {
    it('Should create a Room instance', (done: Function) => {
        api.post('/rooms').send({
            name: 'test',
            square: 12345,
            cost: 'test',
            note: 'test',
            number_of_people: 12345
        }).expect(200, done);
    });
});
