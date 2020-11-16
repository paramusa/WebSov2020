var mysql = require('mysql');

var url = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vash12349",
    database: "example_db"
});

url.connect(function(err) {
    if (err) throw err;
    url.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
/*
var q = url.parse(req.url, true).query;
var startDate = q.start;
var endDate = q.end;*/
var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
+ " FROM event_date, event, location"
+ " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id";
+ " and event_date.Date >= ? and event_date.Date <= ?"
+ " GROUP BY Name"
+ " ORDER BY event_date.Date";
