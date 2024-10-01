// models/ProductTag.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      // References the `Product` model's `id`
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // References the `Tag` model's `id`
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    // Disable automatic timestamp fields (createdAt, updatedAt)
    timestamps: false,
    // Use singular table name
    freezeTableName: true,
    // Use snake_case column names
    underscored: true,
    // Model name stays lowercase in the database
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
