const express=require('express');
const mongoose=require('mongoose');

const itemSchema = new mongoose.Schema({

    name: {type:String, required:true},

    price :{ type:Number, required:true},
    
    available: { type:Boolean, default:true}

})
module.exports=(itemSchema);