var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  is_awake: Boolean
});

var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;

// var profile = {
//   firstName: "Daniel",
//   lastName: "Lwo",
//   birthday: new Date("1991-01-16"),
//   github_link: "https://github.com/phnxdaniel",
//   github_profile_image: "https://avatars3.githubusercontent.com/u/10553764?v=3&s=460",
//   current_city: "San Francisco, CA",
//   is_awake: true
// };
