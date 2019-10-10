'use strict'

const mongoose = require ('mongoose') 
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    price: {type: Number, default:0},
    description: String
})

module.exports = mongoose.model('Product', ProductSchema)
