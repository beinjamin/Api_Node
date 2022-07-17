const express = require("express");
const router = express.Router();

//droit faire en sorte de recuper id de cet object
const ObjectId = require('mongoose').Types.ObjectId

const { PostsModel } = require  ('../models/postsModel');

router.get('/', (req,res)=> {
    PostsModel.find((err,docs )=> {
        if (!err) res.send(docs);
        else console.log("Err to get data: " + err);
 
 
    })
});
//cree
router.post('/', (req,res)=>{
    console.log (req.body)
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message,
    });
    newRecord.save ((err,docs)=>{

        if (!err) res.send (docs);
        else console.log("error creating new data: " +err);
    })

});
//update
route.put ('/:id', (req , res) => {

})



module.exports = router;