// mysql connection to burgers_db
let mysql = require('mysql');
let connection = mysql.createConnection( {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database:  'burgers_db'
});
connection.connect(function(err) {
    if (err)
        return console.log("ERROR " + err.stack);
    console.log("mysql connected as id " + connection.threadId);
});

module.exports = connection;