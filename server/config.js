const Sequelize = require('sequelize');

const sequelize = new Sequelize('tienda', 'root', 'Santafefontanar1', {
  host: 'localhost',
  dialect: 'mysql', 
});
module.exports = sequelize;
