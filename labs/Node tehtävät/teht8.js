'use strict';

var express = require('express');
var app = express();

const path = require("path");
let mysql = require('mysql');
const url = require("url");
const util = require("util");

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vash12349",
    database: "example_db"
});

conn.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});


app.get('/',  (req, res) => {
    res.sendFile((path.join(__dirname, 'listofevents.html')));
});

app.get("/api/location", function (req, res) {
    console.log("Get events from a certain period");
    var q = url.parse(req.url, true).query;
    let name = q.name;
    var alteredResult;
    var string;

    let sql = "SELECT *"
        + " FROM location"
        + " WHERE  location.Location_name = ?";

    const query = util.promisify(conn.query).bind(conn);

    (async () => {
        try {
            const rows = await query(sql,[name]);
            string = JSON.stringify(rows);
            alteredResult = '{"numOfRows":'+rows.length+',"rows":'+string+'}';
            console.log(rows);
            res.send(alteredResult);

        }
        catch (err) {
            console.log("Database error! "+ err);
        }
        finally {
            //conn.end();
        }
    })()
});
