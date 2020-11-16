var express = require('express');
var app = express();



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vash12349",
    database: "example_db"
});

var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
    + " FROM event_date, event, location"
    + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
//+ " and event_date.Date >= ? and event_date.Date <= ?"
+ " GROUP BY event.Name"
+ " ORDER BY event_date.Date";

conn.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

function showData(results){
    app.get('/', function (req, res) {
        res.send(results);
    })
}
function fetchData (callback) {

    //console.log(conn);
    conn.query(sql, function (err, res, fields) {
        if (err) throw err;
        callback(res);
    });
}

fetchData(showData);
