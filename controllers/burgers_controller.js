// ====================================================
// DEPENDENCIES
// ====================================================
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// ====================================================
// ROUTES
// ====================================================
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerData = {
      burgers: data
    };
    console.log(burgerData);
    res.render("index", burgerData);
  });
});
// ====================================================
router.post("/api/burgers", function(req, res){
  var newBurger = req.body.burger_name.toString();
  console.log(newBurger);

  burger.insert("burger_name", newBurger, function(result) {
    res.json({ id: result.insertId});
  });
});
// ====================================================
router.put("/api/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
    console.log("condition: ", condition);
  
    burger.update({devoured: true}, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });
});
// ====================================================
router.delete("/api/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// ====================================================
module.exports = router;
// ====================================================