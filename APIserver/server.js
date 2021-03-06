//Requirements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/', router);

//Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://reseptiuser:reseptiuser@resepticluster.etwl4.mongodb.net/reseptisivu?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

//Launch server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
})
