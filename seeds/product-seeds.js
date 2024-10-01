// seeds/product-seeds.js

const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 50,
    category_id: 1, // Assumes 'Shirts' category has id of 1
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 2, // Assumes 'Pants' category has id of 2
  },
  // Add more products as needed
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
