const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  icon: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;