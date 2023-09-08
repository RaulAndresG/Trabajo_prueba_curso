const Ventas = require('../models/Ventas.js');

const obtenerTotalVentasParacetamol = async (req, res) => {
  try {
    const resultadoAgregacion = await Ventas.aggregate([
      { $unwind: "$medicamentosVendidos" },
      { $match: { "medicamentosVendidos.nombreMedicamento": "Paracetamol" } },
      {
        $group: {
          _id: "$medicamentosVendidos.nombreMedicamento",
          totalVentas: { $sum: "$medicamentosVendidos.cantidadVendida" },
        },
      },
    ]);

    // Devuelve el resultado en formato JSON.
    res.json(resultadoAgregacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar el total de ventas de Paracetamol.' });
  }
};

module.exports = obtenerTotalVentasParacetamol;
