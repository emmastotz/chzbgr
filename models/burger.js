var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(result) {
        cb(result);
      });
    },
    insert: function(col, val, cb) {
      orm.insert("burgers", col, val, function(result) {
        cb(result);
      });
    },
    update: function(val, condition, cb) {
      orm.update("burgers", val, condition, function(result) {
        cb(result);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(result) {
        cb(result);
      });
    }
  };
  
  module.exports = burger;