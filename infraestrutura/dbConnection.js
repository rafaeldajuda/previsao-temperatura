const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'teste'
});

const dbConnectionRemote = mysql.createConnection({
    host: "remotemysql.com",
    port: 3306,
    user: "rfu0YYKsA2",
    password: "keisPioiNg",
    database: "rfu0YYKsA2"
});

module.exports = dbConnectionRemote;