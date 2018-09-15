//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Setting up the PORT
var PORT = process.env.PORT || 8080;

//Serve static content for application
app.use(express.static("public"));

//Body parser set up
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Setting up Handlebars/running engine
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Importing routes
