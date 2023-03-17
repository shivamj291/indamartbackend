const mongoose = require('mongoose')


async function connectDb(){
  const result = mongoose.connect('mongodb://127.0.0.1:27017/indiamartdata');
  return result;
}
module.exports = {connectDb}