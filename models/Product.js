// models/Product.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // Validates that the value is a decimal
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Set default value to 10
      defaultValue: 10,
      // Validates that the value is numeric
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      // References the `Category` model's `id`
      references: {
        model: 'category',
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
    modelName: 'product',
  }
);

module.exports = Product;
