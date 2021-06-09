const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'victor',
  password: 'victor12345',
  database: 'rest_exercicios'});

module.exports = connection;
