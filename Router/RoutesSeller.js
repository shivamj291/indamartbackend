const express = require('express')

const router = express.Router();

const {addData} = require("../Controler/Controlerseller")
    
    router.post('/', async (req, res) => {
        try {
            const mart = await addData(req.body);
    
            return res.send({
                data:mart
            })
        } catch(err){
            console.error(err.message)

            return res.status(400).send({
                message: 'unexpected error'
            })
        }
    })
   
   
    module.exports = router