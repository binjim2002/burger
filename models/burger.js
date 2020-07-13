const orm = require("../config/orm");
const { create } = require("express-handlebars");
const burgerModel = {
    async get(){
        return await orm.selectAll('burgers');
    },
    async devour(burgerId){
        return await orm.updateOne('burgers', {devoured:1}, burgerId);   
    }, 

    async create(name){
        return await orm.insertOne('burgers',{burger_name:name});
    }

}
module.exports = burgerModel