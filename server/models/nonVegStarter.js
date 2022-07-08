const nonVegStarterSchema=require('./item');
const mongoose=require('mongoose');
module.exports=mongoose.model('nonVegStarter',nonVegStarterSchema);