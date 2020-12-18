//Requirements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

const PORT = process.env.PORT || 3000;

//Launch server
const server = app.listen(PORT, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});