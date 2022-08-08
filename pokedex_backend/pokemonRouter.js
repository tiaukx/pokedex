const router = require('express').Router();
const Pokemon = require('./db');

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
    console.log(req.body.name);
    const newPokemon = new Pokemon({name: req.body.name});
    console.log(newPokemon);
    newPokemon.save()
        .then((result) => res.status(201).send('successful'))
        .catch((err) => next(err));
});

//deletes records based on name parameter
router.delete('/remove', (req, res, next) => {
    const removePokemon = new Pokemon({name: req.body.name});
    Pokemon.findOneAndDelete(removePokemon)
        .then(() => res.status(204).send())
        .catch((err) => next(err));
});

module.exports = router;