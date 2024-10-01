// models/Tag.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      // Allows null values
      allowNull: true,
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
    modelName: 'tag',
  }
);

module.exports = Tag;
