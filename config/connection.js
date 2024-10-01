// config/connection.js
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.ecommerce,
  process.env.joshuamarknanninga,
  process.env['12345'],
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    login
  }
);

module.exports = sequelize;
