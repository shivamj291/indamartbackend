const mongoose = require('mongoose')
require("dotenv").config();

async function connectDb(){
  const result = mongoose.connect(process.env.mongoUrl);
  return result;
}
module.exports = {connectDb}