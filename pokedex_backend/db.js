const mongoose = require('mongoose');

const Pokemon = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('pokemon-team', Pokemon);