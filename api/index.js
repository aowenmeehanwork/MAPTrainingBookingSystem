const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());

function handleError(err, req, res) {
    if (err.errno === 3819) err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
    console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
    res.status(500).send({
        message: 'Database error. ' + err.sqlMessage
    });
}

app.post('/course', function(req, res) {
    db.insertCourse(req.body, function(err, insertedKey) {
        if (err) return handleError(err, req, res);
        // TODO: Should we return the inserted item here too?
        res.send({key: "value"});
    });
});

app.listen(8002, function() {
    console.log('Server listening on port 8002');
});
