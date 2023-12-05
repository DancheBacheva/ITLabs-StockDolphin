const Item = require("../../../pkg/item/itemSchema");

exports.viewAll = async (req, res) => {
  try{
    const queryObj = {...req.query};
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g,
    (match)=> `$${match}`
    );
    const query = JSON.parse(queryString);
    const items = await Item.find(query);
    res.status(200).json({
      status: "success",
      data: {
        items,
      }
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.viewOne = async (req, res) => {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        item,
      }
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.create = async (req, res) => {
  try{
    const newItem = await Item.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      }
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.update = async (req, res) =>{
  try{
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        item,
      }
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delete = async (req, res) => {
  try{
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
