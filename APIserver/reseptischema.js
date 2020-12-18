const mongoose = require('mongoose');

/**
 * Schema for the recipe object.
 */
const reseptiSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Resepti', reseptiSchema, 'reseptit');