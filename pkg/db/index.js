const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../config/config.env` });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

exports.init = async () => {
  try{
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the DATABASE stock_dolphins");
  }catch (err) {
    console.log(err);
  }
};