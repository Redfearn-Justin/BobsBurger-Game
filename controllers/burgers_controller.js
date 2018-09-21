//Dependencies
var express = require("express");
var router = express.Router();

//Import Burger model
var burger_model = require("../models/burger.js");


//routes

//GET METHOD
router.get("/", function(request, response){

    burger_model.selectAll(function(data){

        var hbsObject = {
            //UNCERTAIN if "burgers" is correct
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

//ATTTEMPT TO VIEW BURGER LIST VIA URL
router.get("/api/burger", function(request, response){

    console.log("accessing api of burgers..");

    burger_model.selectAll(function(data){
        var checkObject = {
            burgers: data
        };
        response.json(checkObject);
    });
});

//POST METHOD
router.post("/api/burgers", function(request, response){

    burger_model.updateOne([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function(result){

        //verify "result.insertId" nomenclature 
        response.json({id: result.insertId});
    });
});

//UPDATE/PUT METHOD
router.put("/api/burgers/:id", function(request, response){

    var conditional = "id = " + request.params.id;

    console.log("conditional", conditional);

    //REQUEST.BODY.DEVOURED IS COMING BACK "UNDEFINED"

    console.log("this is the request.body.devoured: " + request.body.devoured);

    burger_model.updateOne({
        
        devoured: request.body.devoured

    }, conditional, function(result){

        if(result.changedRows == 0){

            return response.status(404).end();
        }
        else {
            response.send(200).end();
        }
    });
});

//DELETE METHOD
router.delete("/api/burgers/:id", function(request, response){
    
    var conditional = "id = " + request.params.id;

    burger_model.delete(conditional, function(results){
        if(result.affectedRows == 0){
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});

//Export routes for server
module.exports = router;