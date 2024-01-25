// router.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(400).json({ message: "Error creating user." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password." });
    }

    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    res.status(400).json({ message: "Error logging in." });
  }
});

//get post

router.get("/logs", (req, res) =>{
  User.find().exec((err, logs) =>{
    if(err){
      return res.status(400).json({
        error:err
      })
    }

    return res.status(200).json({
      success:true,
      existingLogs:logs
    })
  })
})


//get a specific post

router.get("/log/:id",(req, res) =>{
  let logId = req.params.id;

  User.findById(logId,(err, log) =>{
    if(err){
      return res.status(400).json({success:fails, err})
    }

    return res.status(200).json({
      success:true,
      log
    })
  })
})

module.exports = router;
