const sequelize = require('../config'); 
const { DataTypes } = require('sequelize');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_code: {
    type: DataTypes.STRING(20),
  },
  product_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  product_price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  product_image: {
    type: DataTypes.TEXT,
  },
  product_active: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[0, 1]],
    },
  },
  product_delete: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  product_created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  product_modified_by: {
    type: DataTypes.INTEGER,
  },
  product_modified_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'products', 
  timestamps: false,
});


Product.sync()
  .then(() => {
    console.log('Modelo "Product" sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo "Product":', error);
  });

module.exports = Product;
