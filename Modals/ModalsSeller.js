const express = require('express');

const app = express();


const mongoose = require('mongoose');

const reschema = new mongoose.Schema({
     Name:{
        type:String,
        required:true
     },
     Company:{
        type:String,
        required:true
     },
     Email:{
        type:String,
        required:true
     },
     Image:{
        type:String,
     },
     Product:{
        type:String,
        required:true
     },
     PinCode:{
        type:Number,
        required:true
     },
     City:{
        type:String,
        required:true
     },
     State:{
        type:String,
        required:true
     },
     PhoneNo:{
        type:Number,
        required:true
     },
     HouseNo:{
        type:Number,
        required:true
     },
     Locality:{
        type:String,
        required:true
     }
})

const modalssellerdata = mongoose.model("sellerdata",reschema);
//const restaurantsData= mongoose.model('restaurantsData',resSchema);

module.exports = modalssellerdata