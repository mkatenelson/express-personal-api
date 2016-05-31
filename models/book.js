var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var bookSchema = new Schema({
title: String,
author: String
});

var book = mongoose.model('book', bookSchema);

module.exports = Book;
