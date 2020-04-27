const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// Book has the following attributes title, ISBN, year, desc,  author, imageUrl, buyUrl
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: false
    },
    pubYear: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }, 
    buyUrl: {
        type: String,
        required: true
    }
});

module.exports = Book = mongoose.model('book', BookSchema);