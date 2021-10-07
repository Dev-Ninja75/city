const mongoose = require("mongoose");

const cityModel = new mongoose.Schema({
  departement: Number,
  city: String,
  population: Number,
});

module.exports = mongoose.model("City", cityModel);
