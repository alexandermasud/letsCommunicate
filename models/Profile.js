const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  bio: {
    type: String
  },
  startedYear: {
    type: Number
  },
  hobbies: {
    type: [String]
  },
  linkedIn: {
    type: String
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
