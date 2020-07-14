// const burgerModel = require('./models/burger');


// // orm.insertOne("Double bun").then(function(){
// //     orm.selectAll().then(function(results){
// //     console.log(results)
// //     })
// // // })
// // burgerModel.create('test burger').then(()=>{
// //     burgerModel.devour(1).then(()=>{
// //         burgerModel.get().then(burgers => {
            
// //             console.log(burgers);

// //         })
// //     })
    
// // })

const express = require('express');
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000
const app = express();

// make assets available

app.use(express.static("public"));

// for API-calls
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// for handlebars/views

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// include controllers/routes
app.use(require("./controllers/burgers_controller"));

app.listen(PORT, function(){
    console.log('app running at http://localhost:' + PORT)
}) 