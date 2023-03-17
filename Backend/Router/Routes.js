const express = require('express')

const router = express.Router();

const {addData,getData,deleteById} = require("../Controler/Controler")

router.get('/', async (req, res) => {
    
    const catagory= req.query;
   
        try {
            const indiamart = await getData({
               catagory
            });
    
            return res.send({
                data:indiamart
            })
        } catch(err) {
            console.error(err.message)
    
            return res.status(500).send({
                message: 'Unexpected error'
            })
        }
    })
    
    router.post('/', async (req, res) => {
        try {
            const mart = await addData(req.body);
    
            return res.send({
                data:mart
            })
        } catch(err) {
            console.error(err.message)
    
            return res.status(400).send({
                message: 'unexpected error'
            })
        }
    })
    
    // router.put('/:id', async (req, res) => {
    
    //     try {
    //         const restaurants = await udpateById(req.params.id,req.body);
    
    //         return res.send({
    //             data: restaurants
    //         })
    //     } catch(err) {
    //         console.error(err.message)
    
    //         return res.status(500).send({
    //             message: 'Unexpected error'
    //         })
    //     }
    // })
    
    router.delete('/:id', async (req, res) => {
    
        try {
            const restaurants = await deleteById( req.params.id);
    
            return res.send({
                data: restaurants
            })
        } catch(err) {
            console.error(err.message)
    
            return res.status(500).send({
                message: 'Unexpected error'
            })
        }
    })

    module.exports = router