var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/budgets", function(req, res) {
    db.Budgets.findAll({}).then(function(dbBudgets) {
      res.json(dbBudgets);
    });
  });

  // Create a new example
  app.post("/api/budgets", function(req, res) {
    db.Budgets.create(req.body).then(function(dbBudgets) {
      res.json(dbBudgets);
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
