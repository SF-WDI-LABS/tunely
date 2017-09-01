const express = require("express");
const app = express();
const db = require("./models");
const controllers = require('./controllers');


app.use(express.static("public"));




app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});




app.get('/api', controllers.api.index);




app.listen(3000, function(){
  console.log("server working");
})
