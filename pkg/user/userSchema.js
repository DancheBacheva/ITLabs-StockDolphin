const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter a name"],
  },

  email: {
    type: String,
    required: [true, "You must enter an email"],
    valudate: [validator.isEmail, "Please provide a valid email"],
  },

  password: {
    type: String,
    required: [true, "You must enter a password"]
  },
  
  role: {
    type: String,
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;