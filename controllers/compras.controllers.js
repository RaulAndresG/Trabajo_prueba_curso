const Compras = require('../models/Compras.js');

const obtenerCompras = async (req, res) => {
  try {
    const medicamentosProveedorA = await Compras.find({ proveedor: 'Proveedor A' });

    res.json(medicamentosProveedorA);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'nope' });
  }
};  

module.exports = obtenerCompras;

