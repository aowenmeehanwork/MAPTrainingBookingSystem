const assert = require('assert');
const request = require('request');

const API_URL = 'http://localhost:8002/course';

describe('Adding a course', function() {

    it('should return status 200 with valid inputs', function() {
        request.post({
            uri: API_URL,
            json: {
                Course_Title: 'Course title',
                Course_Date: '2019-12-25',
                Course_Location: 'Frankfurt',
                Course_Description: 'Little description',
                Course_Aim: 'Learn some things',
                Course_Trainer_Name: 'Trainer name'
            }
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 200);
        });
    });

    it('should return status 500 with invalid title', function() {
        request.post({
            uri: API_URL,
            json: {
                Course_Title: '',
                Course_Date: '2019-12-25',
                Course_Location: 'Frankfurt',
                Course_Description: 'Little description',
                Course_Aim: 'Learn some things',
                Course_Trainer_Name: 'Trainer name'
            }
        }, (err, res, body) => {
            if (err) console.log(err);
            if (body) console.log(body);

            assert.equal(res.statusCode, 500);
        });
    });

});