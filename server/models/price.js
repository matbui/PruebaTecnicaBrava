const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Price = sequelize.define('Price', {
  cotizacion_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad_productos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_total: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  fecha_cotizacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

Price.sync()
  .then(() => {
    console.log('Modelo "Price" sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo "Price":', error);
  });

module.exports = Price;