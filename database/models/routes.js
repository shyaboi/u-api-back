const mongoose = require("mongoose");

const { Schema } = mongoose;

const routes = new Schema({
  user: String,
  route: String,
  funktion: String,
});

const routesModel = mongoose.model("routes", routes);

module.exports = routesModel;
