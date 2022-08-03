const { default: mongoose } = require('mongoose');
const mongose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/pokedexTeam', {useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    return console.log('Connection successful');
});

const pokemonSchema = new Schema ({
    name: {
        type: String,
        min: 2,
        required: true,
    }
});

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;