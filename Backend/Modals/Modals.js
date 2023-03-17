const express = require('express');

const app = express();


const mongoose = require('mongoose');

const reschema = new mongoose.Schema({
    id: {
        type:Number,
        required: true
     },
    name: {
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    product_dis: {
        type:String,
        required: true
    },
    catagory:{
        type:String,
        required: true
    },
    seller_name:{
        type:String,
        required: true
    },

    sell_address: {
        type:String,
        required: true
    },
    pincode:{
        type:String,
        required: true
    },

    Color:{
        type:String,
        required: true
    },
    Seller_type: {
        type:String,
        required: true
    },

    state: {
        type:String,
        required: true
    },

    phone_num:{
        type:String,
        required: true
    },
    brand:{
        type:String,
        required: true
    },

    variety:{
        type:String,
        required: true
    },

    weight: {
        type:String,
        required: true
    },

    self_life: {
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
})

const modalsdata = mongoose.model("data",reschema);
//const restaurantsData= mongoose.model('restaurantsData',resSchema);

module.exports = modalsdata