const router = require('express').Router();
const Pokemon = require('./server');

router.get('/readAll', (req, res, next) => {
    Pokemon.find()
        .then((results) => res.send(results))
        .catch((err) => next(err));
});

router.get('/read/:id', (req, res, next) => {
    const id = req.params.id;
    Pokemon.findById(id)
        .then((result) => res.send(result))
        .catch((err) => next(err));
});

router.post('/create', (req, res, next) => {
    const newPokemon = req.body;
    Pokemon.create(newPokemon)
        .then((result) => res.status(201).send(result))
        .catch((err) => next(err));
});

router.delete('/remove/:id', (req, res, next) => {
    const id = req.params.id;
    Pokemon.findByIdAndDelete(id)
        .then(() => res.status(204).send())
        .catch((err) => next(err));
});

module.exports = router;