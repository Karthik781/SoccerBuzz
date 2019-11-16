const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("mongo connection successful");
});

const clubsRouter = require('./routes/clubs');
const playersRouter = require('./routes/players');

 app.use('/clubs', clubsRouter);
 app.use('/players',playersRouter);

app.listen(port, ()=> {
    console.log('running...' + port);
})