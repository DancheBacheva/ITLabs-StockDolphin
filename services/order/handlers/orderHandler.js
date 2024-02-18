const Order = require("../../../pkg/order/orderSchema");
const Item = require("../../../pkg/item/itemSchema");
const Activity = require("../../../pkg/activity/activitySchema");

exports.viewAll = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const query = JSON.parse(queryString);
    const orders = await Order.find(query).populate("item");
    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.viewOne = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("item");
    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const { itemTitle, categoryTitle, quantity, pricePerUnit } = req.body;

    const item = await Item.findOne({ itemTitle });

    const newOrder = await Order.create({
      itemTitle,
      quantity,
      pricePerUnit,
      item: item._id,
      icon: item.icon,
    });

    const createdActivity = await Activity.create({
      activity: "ordered",
      itemTitle,
      categoryTitle, //ne se pojavuva imeto na kategorijata, da se proveri zosto 
      date: new Date(),
    });
    
    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
        activity: createdActivity,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
