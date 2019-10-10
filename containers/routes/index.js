'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const api = express.Router()

api.get('/product', productCtrl.getProducts)

module.exports = api