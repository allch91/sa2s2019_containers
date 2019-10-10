'use strict'

const Product = require('../models/product')

function getProducts(req, res){
    Product.find({}, (err,products)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición de productos: ${err}`})
        if(!products) return res.status(404).send({message: 'No existen productos registrados.'})

        res.status(200).send({products})
    })
}

function saveProduct(req, res){
    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description

    product.save((err, productStored)=>{
        if(err) res.status(500).send({message: `Error al guardar el producto en la BD: ${err} `})

        res.status(200).send({product: productStored})
    })
}

module.exports = {
    getProducts,
    saveProduct
}