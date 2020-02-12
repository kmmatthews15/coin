var db = require("../models");
const express       = require("express"),
      router        = express.Router()

module.exports = function(app) {
  // Get all examples
  app.get("/api/budgets", function(req, res) {
    db.Budgets.findAll({}).then(function(dbBudgets) {
      res.json(dbBudgets);
    });
  });

  // get receipts 
  app.get("api/receipt", function(req, res, next) {
    const author = {
      id: req.user._id,
      username: req.user.username
    }
    const newReceipt = {receipt_type: req.body.type, category: req.body.category, description: req.body.description, value: req.body.value, author: author};
    Receipt.create(newReceipt, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            req.flash("success", "Receipt Added!");
            res.redirect("/home/" + req.params.username);
        }
    });
});


  // Create a new example
  app.post("/api/budgets", function(req, res) {
    db.Budgets.create(req.body).then(function(dbBudgets) {
      res.json(dbBudgets);
    });
  });

  // Receipt update route
router.put("/receipt/:username/:receipt_id", (req, res, next) => {
  var receipt = {receipt_type: req.body.type, category: req.body.category, description: req.body.description, value: req.body.value};
  Receipt.findByIdAndUpdate(req.params.receipt_id, receipt, {upsert: true, new: true}, (err, updatedReceipt) => {
      if (err) {
          req.flash("error", err.message);
          res.redirect("back");
      } else {
          req.flash("success", "Receipt Updated!");
          res.redirect("/home/" + req.params.username);
      }
  });
});

// Receipt destroy route
router.delete("/budget/:username/:receipt_id", (req, res, next) => {
  Receipt.findByIdAndRemove(req.params.receipt_id, (err) => {
      if (err) {
          res.redirect("back");
      } else {
          req.flash("success", "Receipt Deleted!");
          res.redirect("/budget/" + req.params.username);
      }
  });
});

  // Delete an example by id
  app.delete("/api/Budgets/:id", function(req, res) {
    db.Budgets.destroy({ where: { id: req.params.id } }).then(function(
      dbBudgets
    ) {
      res.json(dbBudgets);
    });
  });
};
