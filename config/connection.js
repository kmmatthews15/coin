var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'localhost2',
    user: 'root',
    password: 'Joon912!!',
    database: 'coin_db'
  });
};

connection.connect();
module.exports = connection;