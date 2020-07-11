const mysql = require("mysql")


let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jimmykaz76@",
    database: "burgers_db"
    })
}

connection.connect(function(err){
    if(err){
        console.log("Connection failed")
        return;
    }
    console.log("connected: "+ connection.threadId)
});

module.exports = connection;