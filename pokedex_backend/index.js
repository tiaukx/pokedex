const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const pokemonRouter = require('./pokemonRouter')

mongoose.connect('mongodb://localhost:27017/pokemon', {useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    return console.log('Connection successful');
});

app.use('/pokemon', pokemonRouter);

app.use('*', (req, res, next) => next({status: 404, message:'Invalid url'})); //catches 404s

//error catching
app.use((err, req, res, next) => {
    res.status(err.status ? err.status : 500).send(err.message);
})

const server = app.listen(1995, () => {
    console.log('Server started on', server.address().port);
})

module.exports = server;