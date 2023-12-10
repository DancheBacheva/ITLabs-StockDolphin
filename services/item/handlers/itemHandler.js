const Item = require("../../../pkg/item/itemSchema");
const Category = require("../../../pkg/category/categorySchema");
const multer = require("multer");
const uuid = require("uuid");

const imageId = uuid.v4();

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/img/items"); //da se proveri
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `item-${imageId}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, callback) => {
  if(file.mimetype.startsWith("image")){
    callback(null, true);
  }else{
    callback(new Error("File type is not supported"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPhoto = upload.single("icon");

exports.viewAll = async (req, res) => {
  try{
    const queryObj = {...req.query};
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g,
    (match)=> `$${match}`
    );
    const query = JSON.parse(queryString);
    const items = await Item.find(query).populate("category");
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
    const item = await Item.findById(req.params.id).populate("category");
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
    const { itemTitle, icon, categoryTitle } = req.body;

    const category = await Category.findOne({ title: categoryTitle });

    const newItem = await Item.create({
      itemTitle,
      icon,
      category: category._id,
    });

    await Category.findByIdAndUpdate(category._id, {
      $push: { items: newItem._id},
    });

    res.status(201).json({
      status: "success",
      data: {
        item: newItem,
      },
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
    if (req.file) {
      const filename = req.file.filename;
      req.body.icon = filename;
    }

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


