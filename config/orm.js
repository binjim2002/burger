const connection = require("./connect");
const orm = {
    selectAll(table){
        return new Promise(function(resolve, reject){
            connection.query(`SELECT * FROM ${table}`, function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    },
    insertOne(table,insertObject){
        return new Promise(function(resolve, reject){
            let columns = '', values='', i = 0;
            Object.keys(insertObject).forEach(column => {
                columns += (i > 0 ? ', ' : '') + column;
                values += (i > 0 ? ', ' : '') + `"${insertObject[column]}"`;
                i++;
            }) 

            connection.query(`INSERT INTO ${table}(${columns}) VALUES(${values})`, function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    },
    updateOne(table, updateObject, id){
        return new Promise(function(resolve, reject){
            let updateString = '', i = 0;
            Object.keys(updateObject).forEach(column => {
                updateString += (i>0 ? ', ': '') + `${column} = "${updateObject[column]}"`;
                i++;
            })
            connection.query(`UPDATE ${table} SET ${updateString} WHERE id = ${id}`, function(err, results){
                if(err){
                    reject(err)
                }
                resolve(results)
            })
        })
    }
    
}

module.exports = orm;