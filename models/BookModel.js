
console.log("Book model file runs now")


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres:[String],
  rating:Number
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;
