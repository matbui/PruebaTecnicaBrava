require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

// Middleware para habilitar CORS
app.use(cors());
// Inicialización del servidor
app.get("/", (req, res) => {
  res.send("Servidor backend!");
});

// Configuración de la conexión a la base de datos
const sequelize = require("./config");
const Producto = require("./models/product");
const Cotizacion = require('./models/price');

// Sincronización de la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

// Ruta para obtener todos los productos
app.get("/api/products", async (req, res) => {
  try {
    const products = await Producto.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error al recuperar productos:", error);
    res.status(500).json({ error: "Error al recuperar productos" });
  }
});

// Ruta para agregar una cotización
app.post('/api/cotizaciones', async (req, res) => {
  try {
    const nuevaCotizacion = {
      user_id: req.body.user_id,
      cantidad_productos: req.body.cantidad_productos,
      valor_total: req.body.valor_total,
      fecha_cotizacion: new Date(),
    };

    const cotizacion = await Cotizacion.create(nuevaCotizacion);

    res.status(201).json({ message: 'Cotización agregada con éxito', cotizacion });
  } catch (error) {
    console.error('Error al agregar cotización:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener todas las cotizaciones
app.get('/api/cotizaciones', async (req, res) => {
  try {
    const cotizaciones = await Cotizacion.findAll();
    res.json(cotizaciones);
  } catch (error) {
    console.error('Error al obtener cotizaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});