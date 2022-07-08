const vegStarterSchema=require('./item');
const mongoose=require('mongoose');
module.exports=mongoose.model('vegStarter',vegStarterSchema);