const mongoose=require("mongoose");
const express=require("express");
const user = require("./model/user");
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/blogpost").then(()=>{//mongodb+srv://swatifefar7475:swati13@cluster0.dyf0vvz.mongodb.net/blogpost
    console.log("conneted with atlas server");
  
    const app=express();
    app.use(cors());
    app.use(express.json());
    
    app.get('/post',async(req,res)=>{

        const result =await user.find();
        console.log(result);
        res.json(result);
    })

    app.get('/:id', async(req, res) => {
        const result=await user.findOne({id:req.params.id});
        console.log(result);
        res.json(result);
    })

    app.post('/add',async(req,res)=>{
        const data=req.body;
        console.log(data);
        const result = await user.create(data);
        res.json(result);
    })

   
    app.put('/update/:id',async(req,res)=>{
        const result = await user.findOneAndUpdate({id:req.params.id},req.body);
       res.json(result);
    });

    app.delete('/delete/:id',async(req,res)=>{
        const result = await user.deleteOne({id:req.params.id});
        res.json(result);
    })

    app.listen(4001,()=>{
        console.log("server started");
    })
})