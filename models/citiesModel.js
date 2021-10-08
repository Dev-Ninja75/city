const mongoose = require("mongoose");

const cityModel = new mongoose.Schema({
  department: Number,
  city: {
    type: String,
    unique: true,
  },
  population: Number,
});

module.exports = mongoose.model("City", cityModel); // City => cities dans la db
