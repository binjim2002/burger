const burgerModel = require('./models/burger');


// orm.insertOne("Double bun").then(function(){
//     orm.selectAll().then(function(results){
//     console.log(results)
//     })
// })
burgerModel.create('test burger').then(()=>{
    burgerModel.devour(1).then(()=>{
        burgerModel.get().then(burgers => {
            
            console.log(burgers);

        })
    })
    
})

