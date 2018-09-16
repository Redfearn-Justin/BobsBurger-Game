//Importing ORM
var orm = require("../config/orm.js");

//Establishing "burger" object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers_table", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers_table", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers_table", objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers_table", condition, function(res){
            cb(res);
        });
    }
};

//Export db functionality for controller
module.exports = burger;