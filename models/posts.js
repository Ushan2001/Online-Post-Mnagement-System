const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    topic:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    postCategory:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Posts", PostSchema)