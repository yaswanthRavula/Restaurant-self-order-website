const express=require('express');
const router=express.Router();
const itemSchema=require("../models/nonVegStarter");

router.get("/", async (req,res)=>{
        try{
             data= await itemSchema.find();
             res.send(data);
        }
        catch(err){ res.send(err)}
})

router.post("/", async (req,res)=>{
    const item= new itemSchema({
    name: req.body.name,
    price:req.body.price,
    available: true
   })
   await item.save();

})

module.exports=router;