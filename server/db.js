const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, //Name bd
  process.env.DB_USER, //user bd
  process.env.DB_PASSWORD, //pass bd
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)