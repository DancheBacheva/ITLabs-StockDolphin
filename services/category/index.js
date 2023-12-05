const express = require("express");
const db = require("../../pkg/db/index");
const cors = require("cors");
const jwt = require("express-jwt");

const category = require("./handlers/categoryHandler");

const app = express();

db.init();
app.use(express.json());
app.use(cors());

app.use(
  jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET,
  })
);

app.get("/api/v1/category", category.viewAll);
app.get("/api/v1/category/:id", category.viewOne);
app.post("/api/v1/category", category.create);
app.patch("/api/v1/category/:id", category.update);
app.delete("/api/v1/category/:id", category.delete);

app.listen(process.env.PORTCATEGORY, (err)=>{
  if(err){
    return console.log("Server can not start");
  }
  console.log(`Server started successfully on port ${process.env.PORTCATEGORY}`);
});