// seeds/tag-seeds.js

const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'red',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'green',
  },
  // Add more tags as needed
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
