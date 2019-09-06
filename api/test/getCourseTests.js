const assert = require('assert');
const request = require('request');

const API_URL = 'http://localhost:8002/course';

describe('Getting a course', function() {

    it('Should return status 200 with valid courses', function() {
        request.get({
            uri: API_URL,
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });

    // TESTS BELOW ARE FOR /course/id endpoint that does not currently exist, may be useful later
    // Both tests will be skipped, but still show up in the test report

    it.skip('Should return specific course with 200 return code', function() {
        request.get({
            uri: 'http://localhost:8002/course/1',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 500);
        });
    });

    it.skip('Should return no courses with 404 return code', function() {
        request.get({
            uri: 'http://localhost:8002/course/shjbdfsfasdf',
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 404);
        });
    });

});
