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

app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period");
    var q = url.parse(req.url, true).query;
    var params = q.start + " " + q.end;
    var startDate = q.start;
    var endDate = q.end;
    var alteredResult;
    var string;
    //res.send("Getting events: "+params);

   let sql = "SELECT event_date.Date, event.Name, event.Type, location.Location_name"
        + " FROM event_date, event, location"
        + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = location.Location_id"
        + " and event_date.Date >= ? and event_date.Date <= ?"
        + " GROUP BY event.Name"
        + " ORDER BY event_date.Date";

    const query = util.promisify(conn.query).bind(conn);

    (async () => {
        try {
            const rows = await query(sql,[startDate, endDate]);
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
