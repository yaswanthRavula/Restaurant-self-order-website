const VegRiceSchema=require('./item');
const mongoose=require('mongoose');
module.exports=mongoose.model('vegRice',VegRiceSchema);