//Importing ORM
var orm = require("../config/orm.js");

//Establishing "burger" object
var burger = {
    
    selectOne: function(cb) {

        orm.selectOne("burgers_table", function(res){
            cb(res);
        });
    },
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

        orm.updateOne("burgers_table", objColVals, condition, function(res){
            cb(res);
        });
    }
};

//Export db functionality for controller
module.exports = burger;