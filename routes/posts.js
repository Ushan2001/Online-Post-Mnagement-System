const express = require("express")
const Posts = require("../models/posts");


const router = express.Router();

//save post

router.post("/post/save", (req, res) =>{
  let newPost = new Posts(req.body);

  newPost.save((err) =>{
    if(err){
      return res.status(400).json({
        error:err
      })
    }
    return res.status(200).json({
      success:"Posts Save Successfully"
    })
  })
})

//get post

router.get("/posts", (req, res) =>{
    Posts.find().exec((err, posts) =>{
      if(err){
        return res.status(400).json({
          error:err
        })
      }

      return res.status(200).json({
        success:true,
        existingPosts:posts
      })
    })
})

//update

router.put("/post/update/:id", (req, res) =>{
   Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set:req.body
    },
    (err, post) =>{
      if(err){
        return res.status(400).json({error:err})
      }

      return res.status(200).json({
        success:"update successfully"
      })
    }
   )
})

//delete

router.delete("/post/delete/:id", (req, res) =>{
  Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) =>{
    if(err) return res.status(400).json({
      message:"Delete Unsuccessfull", err
    })

    return res.json({
      message:"Delete Susccessfull" , deletePost
    })
  })
})

//get a specific post

router.get("/post/:id",(req, res) =>{
  let postId = req.params.id;

  Posts.findById(postId,(err, post) =>{
    if(err){
      return res.status(400).json({success:fails, err})
    }

    return res.status(200).json({
      success:true,
      post
    })
  })
})

module.exports = router