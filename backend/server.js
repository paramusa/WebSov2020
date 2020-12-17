const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');
const path = require('path');

const app = express();
app.use(express.json());


app.use(cors());

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://reseptiuser:reseptiuser@resepticluster.etwl4.mongodb.net/reseptisivu?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log("static log juttu");
    });
}

app.use('/api/', router);

const server = app.listen(PORT, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
})
