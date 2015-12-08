var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-page-db');

var Book = require("../models/book.js");
var Profile = require("../models/profile.js");

module.exports = Book;
module.exports = Profile;

// console.log(Book);

// Book.create(books, function(err, book) {
//   if(err) { return console.log("ERR: ", err);}
//   console.log(book);
//   process.exit();
// });

// Book.find({}, function (err, books) {
//   if(err) {return console.log("Err:", err);}
//   console.log(books);
//   process.exit();
// });

// Book.remove(function (err, books) {
//   if(err) { return console.log("Err: ", err);}
//   console.log(books);
//   process.exit();
// });
