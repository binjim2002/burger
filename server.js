const orm = require('./config/orm');


// orm.insertOne("Double bun").then(function(){
//     orm.selectAll().then(function(results){
//     console.log(results)
//     })
// })

orm.updateOne(5).then(function(){
    orm.selectAll().then(function(results){
        console.log(results)
        process.exit()
    })
})
