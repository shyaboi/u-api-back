const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const { Schema } = mongoose;

const userProfile = new Schema({
  user: String,
  routes: Array,
// //   funtion: String,
//   output: Array
});

const userProfileModel = mongoose.model('userProfile', userProfile);

module.exports = userProfileModel