const mongoose = require('mongoose');

// Define the Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

// Create the Product Model
const Product = mongoose.model('products', productSchema);

module.exports = Product;
