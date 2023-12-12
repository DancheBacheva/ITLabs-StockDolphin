const express = require("express");
const db = require("../../pkg/db/index");
const cors = require("cors");
const jwt = require("express-jwt");

const item = require("./handlers/itemHandler");

const app = express();

db.init();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  jwt.expressjwt({
    algorithms: ['HS256'],
    secret: process.env.JWT_SECRET,
  }).unless({
    path: ["/api/v1/item"]
  })
);

app.get("/api/v1/item", item.viewAll);
app.get("/api/v1/item/:id", item.viewOne);
app.post("/api/v1/item", item.create);
app.patch("/api/v1/item/:id", item.update);
app.delete("/api/v1/item/:id", item.delete);

app.listen(process.env.PORTITEM, (err)=>{
  if(err){
    return console.log("Server can not start");
  }
  console.log(`Server started successfully on port ${process.env.PORTITEM}`);
});