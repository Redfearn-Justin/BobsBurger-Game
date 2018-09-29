//Importing ORM
var orm = require("../config/orm.js");

//Establishing "burger" object
var burger = {
    
    selectAll: function(cb) {

        orm.selectAll("burgers_table", function(res){
            cb(res);
        });
    },
    insert: function(cols, vals, cb) {

        orm.insertOne("burgers_table", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){

        orm.update("burgers_table", objColVals, condition, function(res){
            cb(res);
        });
    },
    //add delete function here
};

//Export db functionality for controller
module.exports = burger;