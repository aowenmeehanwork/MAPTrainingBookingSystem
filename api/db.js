require('dotenv').config({ path: 'mysql.env' });
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to mysql');
});

exports.insertCourse = function(data, callback) {
console.log(data);
    db.query('INSERT INTO course SET ? ', data, function(err, results, fields) {
        if (err) return callback(err, null);
        callback(err, results.insertId);
    });
};