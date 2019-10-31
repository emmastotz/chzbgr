// ====================================================
// DEPENDENCIES
// ====================================================
const connection = require("../config/connection.js");

// ====================================================
// FUNCTIONS
// ====================================================
// Converts Object key/value pairs to SQL syntax
function convertToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ====================================================
// ORM
// ====================================================
var orm = {
  all: function(table, callback) {
    var query = "SELECT * FROM " + table +";";
    connection.query(query, function(err, res) {
      if (err) throw err;
      callback(res);
    });
  },
// ====================================================
  insert: function(table, col, val, callback) {
    var query = "INSERT INTO " + table;
    query += " (";
    query += col.toString();
    query += ") ";
    query += "VALUES (";
    query += "'" + val.toString() + "'";
    query += ") ";

    console.log(query);

    connection.query (query, function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
// ====================================================
  update: function(table, val, condition, callback) {
    var query = "UPDATE " + table;

    query += " SET "; 
    query += convertToSql(val);
    query += " WHERE ";
    query += condition;

    console.log(query);

    connection.query(query, function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
// ====================================================
  delete: function(table, condition, callback) {
    var query = "DELETE FROM " + table;
    query += " WHERE ";
    query += condition;

    connection.query(query, function(err, res) {
      if (err) throw err;
      callback (res);
    });
  }
};
// ====================================================
module.exports = orm;
// ====================================================