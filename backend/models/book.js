const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    image: { type: String },
});

module.exports = mongoose.model('Book', bookSchema);