const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: [category, item, order],
  },

  icon: {
    type: String
  },

})

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
