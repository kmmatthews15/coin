var db = require("../models");
const express     = require("express"),
      router      = express.Router(),
      passport    = require("passport")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Budgets.findAll({}).then(function(dbExamples) {
    //   res.render("homepage", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    res.render("login");
  });

  // Handle login logic
router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { 
      if (err) { return next(err); } 
      if (!user) {
          req.flash("error", "Incorrect Username/Password. Try Again"); 
          return res.redirect('/home'); 
      } 
      req.logIn(user, (err) => {
          if (err) { return next(err); } 
          var redirectTo = req.session.redirectTo ? req.session.redirectTo : '/home/' + user.username;  
          delete req.session.redirectTo;
          res.redirect("/home/" + user.username);
      });
  })(req, res, next);
});

  app.get("/home", function(req, res) {
    res.render("home");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
