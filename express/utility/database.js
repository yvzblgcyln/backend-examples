const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node-app",
  password: "1239875",
});

module.exports = connection.promise();
