const express = require('express')
const app = express();
const cors = require('cors')
const dataRouter = require('./Router/Routes')
const sellerRouter = require("./Router/RoutesSeller")
const {connectDb} = require('./config/db')

app.use(express.json());
app.use(cors());
app.use('/data',dataRouter);
app.use('/seller',sellerRouter)


  
connectDb().then(()=>{
    
  app.listen(8000,()=>{
      console.log("hello ready for run")
  })
})
