const mongoose = require("mongoose");

// Schema de city (cities)
const cityModel = new mongoose.Schema({
  department: Number,
  city: {
    type: String,
    unique: true,
  },
  population: Number,
});

// Export du model City
module.exports = mongoose.model("City", cityModel); // City => cities dans la db
