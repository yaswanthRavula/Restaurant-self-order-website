const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const bodyParser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://yaswanth07:Yy8309328761@cluster0.fgrp3.mongodb.net/?retryWrites=true&w=majority", function(){console.log("Mongoose Connected")});

app.listen(1234,()=>console.log("Server is running at loalhost:1234"));

/*---------Routing Section-----------------*/
const vegStarterRouter=require('./controllers/vegStarter');
const nonVegStarterRouter=require('./controllers/nonVegStarter');
const vegRiceRouter=require('./controllers/vegRice');
const nonVegRiceRouter=require('./controllers/nonVegRice');
app.use('/items/veg-starters',vegStarterRouter);
app.use('/items/non-veg-starters', nonVegStarterRouter);
app.use('/items/veg-rice-items', vegRiceRouter);
app.use('/items/non-veg-rice-items',nonVegRiceRouter);

