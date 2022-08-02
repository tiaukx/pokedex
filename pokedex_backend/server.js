const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const pokemonRouter = require('./pokemonRouter')

app.use((req, res, next) => {
    const logEntry = `host: ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.loh(logEntry);
    next();
})

app.use('./pokemonRouter', pokemonRouter);

app.use('*', (req, res, next) => next({status: 404, message:'Invalid url'})); //catches 404s

//error catching
app.use((err, req, res, next) => {
    res.status(err.status ? err.status : 500).send(err.message);
})

const server = app.listen(1995, () => {
    console.log('Server started on', server.address().port);
})

module.exports = server;