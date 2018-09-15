//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Setting up the PORT
var PORT = process.env.PORT || 8080;

var app = express();

//Serve static content for application
app.use(express.static("public"));

//Body parser set up for URL and JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Setting up Handlebars/running engine
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Importing routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

//Application listeners
app.listen(PORT, function(){
    console.log("Server is active on PORT: " + PORT);
});
