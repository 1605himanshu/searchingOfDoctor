const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  profession: String,
  experience: String,
   specialty: String,
  location: String,
  fee: Number,
  image: String,
  rating: Number,
  stories: String,
  isAd: Boolean,
  available: Boolean,
});

module.exports = mongoose.model("Doctor", doctorSchema);
