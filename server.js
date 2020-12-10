const mysql = require("mysql");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080; 

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "animals_db"
    });
}

connection = mysql.createConnection("mysql://fcsn4edoem1777ej:llfbpqimyq8325un@jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/evw6mht238wfp26q");


connection.connect(function(err) {
    if (err) throw err;
    console.log("CONNECTED!");
});

app.get("/", function(req, res) {
    res.send("CONNECTED!");
});

app.listen(PORT, function(){
    console.log("you've connected at http://localhost:" + PORT);
})