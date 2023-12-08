const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
  },

  price: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now()
  },

  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier"
  },
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;