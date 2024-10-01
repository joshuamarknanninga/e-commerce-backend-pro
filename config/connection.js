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
<<<<<<< HEAD
    logging: false;
=======
    logging: false,
>>>>>>> 7bd9c0b5e3d8f2f24b8213e5591640931f100194
  }
);

module.exports = sequelize;
