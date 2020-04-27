const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Book');

// @route GET api/books
// @desc Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .sort({ pubYear: -1})
        .then(books => res.json(books));
});

// @route POST api/books
// @desc Create a Book
// @access Public
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        isbn: req.body.isbn,
        pubYear: req.body.pubYear,
        desc: req.body.desc,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        buyUrl: req.body.buyUrl,
    });
    newBook.save()
        .then(book => res.json(book));
});


//We do not need this function for books right now

// @route DELETE api/books/:id
// @desc Delete a Book
// @access Public
router.delete('/:id', (req, res) => {
        Book.findById(req.params.id)
            .then(book => book.remove().then(() => res.json({success: true})))
            .catch(err => res.status(404).json({success: false}));
    });




module.exports = router;

/*
title
isbn
pubYear
desc
author
imageUrl
buyUrl
*/