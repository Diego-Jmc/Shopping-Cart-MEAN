const mongoose = require('mongoose')
const Product = require('../models/Product')

const uri = `mongodb+srv://diegoJ:${process.env.MONGO_DB_PASSWORD}@cluster0.gow6qrw.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(uri)

async function create(product){

    const createdProduct = await Product.create(product);
    return createdProduct;
}


async function findAll(){
    return Product.find({})
}


async function deleteById(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
}
  
async function findById(productId) {
    return Product.findById(productId);
}

module.exports = {
    create,
    findAll,
    deleteById,
    findById
  };