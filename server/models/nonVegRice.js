const nonVegRiceSchema=require('./item');
const mongoose=require('mongoose');
module.exports=mongoose.model('nonVegRice',nonVegRiceSchema);