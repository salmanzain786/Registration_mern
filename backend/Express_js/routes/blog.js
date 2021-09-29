const express = require('express');
const path = require('path');
const route = express.Router();
const connectDB = require('../config/dbConnection.js');
const mongoose = require('mongoose');
const app = express()

connectDB();
const blogSchema = new mongoose.Schema({
    title: String,
    content : String,
    date : String,
    author : String
  });
  const Blog = mongoose.model('blog',blogSchema);
  
route.post('/add_blog',(req,res)=>{
      const createBlog = async () => {
        try{
            const blogList = new Blog({
                title : req.body.title,
                content : req.body.content,
                date : req.body.date,
                author : req.body.author
            })
            const result = await blogList.save();
            res.json(result);
        }
        catch(e){
            // console.log(e);
            res.json(e);
        }
    }
    createBlog();
});

route.get('/getBlog',(req,res)=>{
    
    Blog.find(function(err, doc){
        if(err){
            consolr.log(err)
        }
        else{
            res.json({status : "success", data : doc});

        }
        // console.log(doc);
    })
});

route.post('/edit_blog',(req, res) => {
    Blog.findByIdAndUpdate(req.body.id,
        {
            title : req.body.title,
            content : req.body.content,
            date : req.body.date,
            author : req.body.author
        
        },
        function(err,doc){
        if(err){
            console.log(err);
        }
        else{
            res.json({
                status : "success",
                data : doc
            })
        }
    })
})

route.post('/getBlogById',(req, res) => {
    Blog.findById(req.body.id,function(err, doc){
        console.log(doc);
        res.json(doc);
    })    
})

route.post('/delete_post',(req, res) => {
    Blog.findByIdAndDelete(req.body.id,function(err,doc){
        if(err){
            console.log(error);
        }
        else{
            res.json(doc);
        }
    })
})
 // Use this after the variable declaration
module.exports = route;