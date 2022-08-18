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
    const newPokemon = new Pokemon({name: req.body.name, pokedexId: req.body.pokedexId});
    console.log(newPokemon);
    newPokemon.save()
        .then((result) => res.status(201).send('successful'))
        .catch((err) => { 
            console.log(err.message)
            next(err)
        });
});

//deletes records based on ID parameter
router.delete('/remove/:id', (req, res, next) => {
    const id = req.params.id;
    Pokemon.findByIdAndDelete(id)
        .then(() => res.status(204).send())
        .catch((err) => next(err));
});

module.exports = router;