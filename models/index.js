// models/index.js

const sequelize = require('../config/connection');
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define Associations

// Products belong to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  sequelize,
  Category,
  Product,
  Tag,
  ProductTag,
};
