const connection = require("./db")
const sel=(req,res)=>{
    var qry="SELECT * FROM details where Email=? and pass=?;";
    console.log(req.query.Email,req.query.pass);
    connection.query(qry,[req.query.Email,req.query.pass],function(err,result){
        if(err){ 
            res.send({
                status : 400,
                message:"err",
                data:err
              })
        }
    else if (result){
        res.send({
            status:200,message:"success",
            data:result
        }) 
    }
          
    })
}
const ins=(req,res)=>{
    function isValidpass(pass) {
        // Define regular expression for email validation
        const emailRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/;
      
        // Test the email against the regular expression
        console.log("pass",pass,emailRegex.test(pass));
        return emailRegex.test(pass);
      }
      const pass = req.body.pass;
    function isValidphone(phone) {
        // Define regular expression for email validation
        const emailRegex = /[+CCC.NNNNNNNNNNxEEEE]/;
      
        // Test the email against the regular expression
        console.log("phone",phone,emailRegex.test(phone));
        return emailRegex.test(phone);
      }
      const phone = req.body.phone;
    function isValidEmail(email) {
  // Define regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return !emailRegex.test(email);
}
const email = req.body.email;
function isValidname(name) {
    const specialChars = /[` !#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log(specialChars.test(name));
  return !specialChars.test(name);
  }
  const name = req.body.name;
  if(isValidname(name)){
        if (isValidEmail(email)) {
            if(isValidphone(phone) && phone.length>12 && phone.length<=17){
                if(isValidpass(pass) && pass.length>=8){
                            console.log('Email is valid!');

                                var qry="INSERT INTO details (Id,Name,email,phone,pass) VALUES(?,?,?,?,?)";
                                console.log(req.body.Name);
                                connection.query(qry,[req.body.id,req.body.Name,req.body.Email,req.body.phone,req.body.pass],function(err,result){
                                    if(err){ 
                                        res.send({
                                            status : 400,
                                            message:"err",
                                            data:err 
                                        })
                                    }
                                else if (result.length>0){
                                    res.send({
                                        status:400,
                                        message:"username and password missmatched",
                                        data:result
                                    }) 
                                }
                                else{
                                    res.send({
                                        status : 200,
                                        message:"successfully inserted",
                                        data:result 
                                    })
                                }
                                
                                    
                                })
                            }
                            else {
                                res.send({
                                    status:400,
                                    message:'password is not valid!',
                                })
                            }
                            }

        else {
            res.send({
                status:400,
                message:'phone is not valid!',
            })
        }
        }
else {
    res.send({
        status:400,
        message:'Email is not valid!',
    })
  }
}
else{
    res.send({
        status:400,
        message:'name is not valid!',
    })
}

}
const upda=(req,res)=>{
    var qry="UPDATE details  SET `name` = ?,`email` = ?,`phone` = ?,`password` = ? WHERE `id` = ?";
    console.log(req.body.name);
    connection.query(qry,[req.body.NAME,req.body.Email,req.body.phone,req.body.password,req.body.id],function(err,result){
        if(err){ 
            res.send({
                status : 400,
                message:"err",
                data:err 
              })
        }
        else if (result.length>0){
            res.send({
                status:400,
                message:"username and password missmatched",
                data:result
            }) 
        }
        else{
            res.send({
                status : 200,
                message:"successfully updated",
                data:result 
              })
        }
          
    })
}

const del=(req,res)=>{
    var qry="DELETE FROM details WHERE id=?";
    connection.query(qry,[req.body.id],function(err,result){
        if(err){ 
            res.send({
                status : 400,
                message:"err",
                data:err 
              })
        }
        else if (result.length>0){
            res.send({
                status:400,
                message:"username and password missmatched",
                data:result
            }) 
        }
        else{
            res.send({
                status : 200,
                message:"successfully deleted",
                data:result 
              })
        }
          
    })
}

const img=(req,res)=>{
    console.log(req.files)
const qry='SELECT * FROM details WHERE image_name =?';
connection.query(qry,[],function (err, data, fields) {

 if(err) throw err

 if(data.length>1){

     var msg = inputValues.image_name + " is already exist";
 }
 else{ 

    // save users data into database
    const qry = 'INSERT INTO details SET ?';
   connection.query(qry, inputValues, function (err, data) {
      if (err) throw err;
   });
  var msg = inputValues.image_name+ "is uploaded successfully";
 }
 return callback(msg)
})

}
module.exports={ins,upda,del,sel,img};