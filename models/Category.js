// models/Category.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,       // Doesn't allow null values
      primaryKey: true,       // Set as primary key
      autoIncrement: true,    // Uses auto increment
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,       // Doesn't allow null values
    },
  },
  {
    sequelize,
    timestamps: false,        // Disables createdAt and updatedAt timestamps
    freezeTableName: true,    // Model tableName will be the same as the model name
    underscored: true,        // Uses snake_case for automatically added attributes
    modelName: 'category',    // Sets the model name in lowercase
  }
);

module.exports = Category;
