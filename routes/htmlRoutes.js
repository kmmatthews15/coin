var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Budgets.findAll({}).then(function(dbExamples) {
    //   res.render("homepage", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    res.render("login");
  });

  app.get("/home", function(req, res) {
    res.render("home");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
