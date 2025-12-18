const Product = require('../Models/product.model');

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProductsbyId = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addProduct = async (req, res) => {
    const { name, price, inStock } = req.body;
    const newProduct = new Product({ name, price, inStock });
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getProducts , getProductsbyId, addProduct };