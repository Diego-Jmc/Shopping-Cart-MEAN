const moongose = require('mongoose')

const Schema = moongose.Schema()


const ProductSchema = moongose.Schema(
    {

        name:{
            type:String,
            required:[true]
        },

        description:{
            type:String,
            required:[true]
        },

        prize:{
            type:Number,
            required:[true]
        },

        image:{
            type:String
        }

    }

)

const Product = moongose.model('Product',ProductSchema)

module.exports = Product