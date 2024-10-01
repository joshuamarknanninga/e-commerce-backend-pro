// config/connection.js
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.ecommerce,
  process.env.joshuamarknanninga,
  process.env.12345,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: console.log
  }
);

module.exports = sequelize;
