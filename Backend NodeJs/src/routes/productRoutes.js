const express = require('express');
const router = express.Router();
const productServices = require('../services/productServices')

router.get('/products',async (req,res)=>{
        const products = await productServices.findAll()
        res.send(products)
})
.get('/products/:id',async (req,res)=>{
    try{
        const product = await productServices.findById(req.params.id)
        res.send(product)
    }catch(exception){
        res.sendStatus(404)
    }   
})
.delete('/products/:id',async (req,res)=>{
    try{
        const product = await productServices.deleteById(req.params.id)
        res.send(product)
    }catch(exception){
        res.sendStatus(404)
    }   
})
.post('/products',async (req,res)=>{
    try{

        const product = await productServices.create(req.body)
        res.send(product)

    }catch(exception){
        res.sendStatus(400)
    }
})


module.exports = router