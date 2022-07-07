const mongoose = require("mongoose");

const PostsModel = mongose.model (
    "api-node",
    {
        author:{
            type: String,
            required: true 
        },

        message: {
            type: String,
            required: true
        }

    },

    "posts"
)