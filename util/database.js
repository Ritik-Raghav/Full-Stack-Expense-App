const Sequelize = require('sequelize');

const sequelize = new Sequelize('user-data', 'root', 'pass', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;