const mongoose = require("mongoose");

const { Schema } = mongoose;

const userProfile = new Schema({
  user: String,
  routes: Array,
  funktion: String,
});

const userProfileModel = mongoose.model('userProfile', userProfile);

module.exports = userProfileModel