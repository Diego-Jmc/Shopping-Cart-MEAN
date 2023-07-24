const productRepo = require('../database/productRepository.js')



async function findAll(){
    return productRepo.findAll()
}

async function create(product){
    return productRepo.create(product)
}


async function findById(id){
    return productRepo.findById(id)
}

async function deleteById(id){
    return productRepo.deleteById(id)
}


module.exports = {
    findAll,
    create,
    findById,
    deleteById
}