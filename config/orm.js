// Object Relational Mapping
// for mysql DB burgers_db
connection = require('./connection');

let orm = {
    selectAll: function(table, callback) {
        let queryStr = "SELECT * FROM ??";
        connection.query(queryStr, table, function(err, results) {
            if (err) throw err;
            callback(results);
        });
    },
    insertOne: function(table, column, value, callback) {
        let queryStr = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryStr, [table, column, value], function(err) {
            if (err) throw err;
            callback();
        });
    },
    updateOne: function(table, id, column, newValue, callback) {
        let queryStr = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryStr, [table, column, newValue, id], function(err) {
            if (err) throw err;
            callback();
        });
    },
}

module.exports = orm;