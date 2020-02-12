require("dotenv").config();
const Hapi = require('hapi');
const express = require("express");
const exphbs = require("express-handlebars");
const server = new Hapi.Server();
const db = require("./models");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request,reply) {
    const read = promisify(fs.readFile);
    const file = read(Path.join(_dirname , 'login'))
      return reply.response(file).header('content-type', 'handlebar');
  }
});

server.route({
  method: 'GET',
  path: '/home',
  handler: function (request,reply) {
    const read = promisify(fs.readFile);
    const file = read(Path.join(_dirname , 'home'))
      return reply.response(file).header('content-type', 'handlebar');
  }
});


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
