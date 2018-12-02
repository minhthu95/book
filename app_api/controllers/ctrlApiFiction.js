// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'Fiction' model so we can interact with the Fictions collection
const fictionModel = mongoose.model('fictions');

const bookList = function (req, res) {
    fictionModel.find({}, function (err, bookName) {
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(bookName);
        }
    });
};
const addBook = function (req, res) {
    fictionModel.create(req.body, function (err, newBook) {
        if(err){
            res.status(400).json(err);
        }
        else{
            res.status(201).json(newBook);
        }
    })
};
module.exports = {
    bookList,
    addBook
};