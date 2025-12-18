const express = require('express');
const router = express.Router();
const { getProducts , getProductsbyId, addProduct} = require('../controls/product.control');

router.get('/', getProducts)
router.get('/:id', getProductsbyId)

router.post('/add', addProduct)

module.exports = router;