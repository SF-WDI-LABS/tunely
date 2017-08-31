const express = require("express");
bodyParser = require("body-parser");


//generating new express app
var app = express();

//serve static files in public
app.use(express.static(__dirname + "/public"));

// app.use(bodyParser.urlenconded({ extended: true}));

//Setting up route to your server will respond to GET
app.get("/", function (req, res) {
  res.sendFile("/views/index.html", {root: __dirname});
})

//listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("Tunely Application listening at http://localhost:3000");
});
