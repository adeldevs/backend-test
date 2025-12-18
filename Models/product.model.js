const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    inStock : {
        type : Boolean,
        default : true
    }
});

const Product = mongoose.model('Product', productModel);
module.exports = Product;