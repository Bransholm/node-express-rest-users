import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    database: "user_db",
    password: "kbsqwe-789",
    multipleStatements: true
});

export default connection;