
const express =require('express')
var multer = require('multer')
var mydb=require('./db')
var login=require('cors')
var body=require('body-parser')
var path = require('path')
mydb.connect((err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("db connected");
    }

})
const app=express()
app.listen(8800)
app.use(express.json());
//app.use(login())
app.use(body.json())
app.use(require('./route'))
