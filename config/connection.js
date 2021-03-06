// ====================================================
// DEPENDENCIES
// ====================================================
require("dotenv").config();
var mysql = require("mysql");
var keys = require('./keys.js');
// ====================================================
// KEYS
// ====================================================
var mySqlPass = keys.keys.secret;
var mySqlUser = keys.keys.id;
// ====================================================
// MySQL CONNECTION TO DATABASE
// ====================================================
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    // properties...
    host: "localhost",
    port: 3306,
    user: mySqlUser,
    password: mySqlPass,
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected at ID " + connection.threadId);
});

module.exports = connection;
// ====================================================