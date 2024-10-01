// seeds/product-tag-seeds.js

const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1, // Assumes product with id 1 exists
    tag_id: 1,     // Assumes tag with id 1 exists
  },
  {
    product_id: 1,
    tag_id: 2,
  },
  {
    product_id: 2,
    tag_id: 3,
  },
  // Add more associations as needed
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
