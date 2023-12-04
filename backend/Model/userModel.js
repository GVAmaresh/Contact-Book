const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number, index: true },
  first_name: { type: String, required: [true, "First name is required"] },
  last_name: { type: String, required: [true, "Last name is required"] },
  email: {
    type: String,
    unique: [true, "Email should be unique"],
    required: [true, "Email is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  avatar: { type: String, required: [true, "Avatar is required"] },
  domain: { type: String, required: [true, "Domain is required"] },
  available: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
