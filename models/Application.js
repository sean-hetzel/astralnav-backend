const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  user_id: String,
  company: String,
  position: String,
  location: String,
  method: String,
  coverLetter: String,
  date: Date,
  notes: String,
  status: String,
});

module.exports = mongoose.model("Applications", ApplicationSchema);
