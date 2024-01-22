const express = require("express");
const db = require("../../pkg/db/index");
const cors = require("cors");
const jwt = require("express-jwt");

const activity = require("./handlers/activityHandler");

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
    path: ["/api/v1/activity"]
  })
);

app.get("/api/v1/activity", activity.viewAll);
app.get("/api/v1/activity/:id", activity.viewOne);
app.post("/api/v1/activity", activity.create);
app.delete("/api/v1/activity/:id", activity.delete);

app.listen(process.env.PORTACTIVITY, (err)=>{
  if(err){
    return console.log("Server can not start");
  }
  console.log(`Server started successfully on port ${process.env.PORTACTIVITY}`);
});