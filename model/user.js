const mongoose = require("mongoose");

const schema=mongoose.Schema({
    id:String,
    title:Number,
    author:Number,
    date:{
        type:Date,
        default:Date.now()
    },
    content:String,
   

} , )

module.exports=mongoose.model("user",schema);