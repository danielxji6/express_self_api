var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  releaseDate: String,
  status: String
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;

//
// {
//   _id: 1,
//   title: "Zero to One",
//   author: "Peter Thiel, Blake Masters",
//   image: "http://t1.gstatic.com/images?q=tbn:ANd9GcTI_ooZzjy49uuu0Shtt6mOlIxLIEZ4Qd5DRJgS7z9asXEoHP5J",
//   releaseDate: new Date("2014-09-16"),
//   status: "done"
// }
