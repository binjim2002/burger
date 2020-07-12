const connection = require("./connect");
const orm = {
    selectAll(){
        return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM burgers", function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    },
    insertOne(name){
        return new Promise(function(resolve, reject){
            connection.query(`INSERT INTO burgers(burger_name) VALUES("${name}")`, function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    },
    updateOne(id){
        return new Promise(function(resolve, reject){
            connection.query(`UPDATE burgers SET devoured = true WHERE id = ${id}`, function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    }
    
}

module.exports = orm;