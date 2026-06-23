const mysql = require('mysql2/promise');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize; 