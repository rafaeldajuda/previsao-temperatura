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
    user: "XXXXXX",
    password: "XXXXXX",
    database: "XXXXXX"
});

module.exports = dbConnectionRemote;