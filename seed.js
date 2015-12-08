var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-page-db');

var Book = require("./models/book.js");
var Profile = require("./models/profile.js");

var profile = {
  firstName: "Daniel",
  lastName: "Lwo",
  birthday: new Date("1991-01-16"),
  github_link: "https://github.com/phnxdaniel",
  github_profile_image: "https://avatars3.githubusercontent.com/u/10553764?v=3&s=460",
  current_city: "San Francisco, CA",
  is_awake: true
};

var books = [
  {
    title: "Zero to One",
    author: "Peter Thiel, Blake Masters",
    image: "http://t1.gstatic.com/images?q=tbn:ANd9GcTI_ooZzjy49uuu0Shtt6mOlIxLIEZ4Qd5DRJgS7z9asXEoHP5J",
    releaseDate: new Date("2014-09-16"),
    status: "done"
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Giver_first_edition_1993.jpg",
    releaseDate: new Date("1993"),
    status: "done"
  },
  {
    title: "The Firm",
    author: "John Grisham",
    image: "http://www.gstatic.com/tv/thumb/movieposters/14877/p14877_p_v7_aa.jpg",
    releaseDate: new Date("1991-02-01"),
    status: "reading"
  },
];



// Book.create(profile, function(err, book) {
//   if(err) { return console.log("ERR: ", err);}
//   console.log(book);
//   process.exit();
// });

// Book.find({}, function (err, books) {
//   if(err) {return console.log("Err:", err);}
//   console.log(books);
//   process.exit();
// });

// Book.remove({_id: "5666653ac12d48770687f253"},function (err, books) {
//   if(err) { return console.log("Err: ", err);}
//   console.log(books);
//   process.exit();
// });

Profile.create(profile, function (err, profile) {
  if(err) {return console.log("ERR: ", err);}
  console.log(profile);
  process.exit();
})
