const express = require('express');
const route = express.Router();
const connectDB = require('../config/dbConnection.js');
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

connectDB();
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name : { type: String, required: true},
    email : { type: String, required: true, match: /.+\@.+\..+/, unique: true},
    phone : { type: String, required: true},
	address : String,
	password : { type: String, required: true},
  });
  userSchema.plugin(uniqueValidator)
  const User = mongoose.model('user',userSchema);
  
route.post('/add_user',(req,res)=>{
    // console.log(req.body);
    const post_first_name =   req.body.first_name;
    const post_last_name =   req.body.last_name;
    const post_email =   req.body.email;
    const post_phone =   req.body.phone;
    const post_address =   req.body.address;
    const post_password =   req.body.password;

    const createUser = async () => {
        try{
            const userList = new User({
                first_name : post_first_name,
                last_name : post_last_name,
                email : post_email,
                phone : post_phone,
				address : post_address,
				password : post_password,
            })

            if(req.body.c_password === post_password){ 
                const result = await userList.save();
                const final_res = {status : "200", data : result};
                res.json(final_res);
            }
           
        }
        catch(e){
            // console.log(e);
            res.json(e);
        }
    }
    createUser();
});


route.post('/login',(req,res)=>{
    const post_email =   req.body.email;
    const post_password =   req.body.password;
    User.find({email : post_email, password : post_password},function(err, doc){
        if(err){
            consolr.log(err)
        }
        else{
            if(doc.length > 0){
                res.json({status : "200", data : doc});
            }
            else{
                res.json({status : "847", message : "Invalid Credientials"});
            }

        }
        // console.log(doc);
    })
});

 // Use this after the variable declaration
module.exports = route;