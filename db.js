var db=require('mysql')
var connection=db.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"password",
        database:"test"
    })
module.exports=connection