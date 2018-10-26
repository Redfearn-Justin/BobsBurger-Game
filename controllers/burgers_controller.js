//Dependencies
var express = require("express");
var router = express.Router();

//Import Burger model
var burger_model = require("../models/burger.js");


//Routes
//==================================================

//GET METHOD
router.get("/", function(request, response){

    function doThisWithData(data){

        var hbsObject = {

            burgers: data
        };
        console.log(hbsObject);

        response.render("index", hbsObject);
    }
    
    burger_model.selectAll(doThisWithData);

});

//POST METHOD
router.post("/api/burgers", function(request, response){

    burger_model.insert([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function(result){

        response.json({id: result.insertId});
    });
});

//UPDATE/PUT METHOD
router.put("/api/burgers/:id", function(request, response) {

    var conditional = "id = " + request.params.id;

    console.log("conditional", conditional);
    console.log(request.body);

      burger_model.update({
        
        devoured: request.body.devoured

    }, conditional, function(result){

        
        response.json("done");

    });
});

//DELETE METHOD (not required; additional functionality)
router.delete("/api/burgers/:id", function(request, response){
    
    var conditional = "id = " + request.params.id;

    burger_model.delete(conditional, function(results){
        
        response.json("done");
        
    });
});

//Export routes for server
module.exports = router;