// seeds/category-seeds.js

const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Accessories',
  },
  // Add more categories as needed
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
