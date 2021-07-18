const mysql = require('mysql');

const database = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zkdnsxj1',
    database: 'opentutorials',
  });
  return connection;
};

exports.database = database;
