const Medicamentos = require('../models/Medicamentos.js'); 
const obtenerMedicamentosMenosDe50Unidades = async (req, res) => { 
  try {
    const medicamentosMenosDe50Unidades = await Medicamentos.find({  
      stock: { $lt: 50 },   

    });

    res.json(medicamentosMenosDe50Unidades);    

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar los medicamentos con menos de 50 unidades en stock.' }); 
  }
};

module.exports = obtenerMedicamentosMenosDe50Unidades;
