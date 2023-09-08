const Medicamentos = require('../models/Medicamentos.js');

const mostrarMedicamentosCaducanAntesEnero2024 = async (req, res) => {
  try {
    const fechaLimite = new Date('2024-01-01');    


    const medicamentosCaducanAntesEnero2024 = await Medicamentos.find({    

      fechaExpiracion: { $lt: fechaLimite },    
    });

    res.json(medicamentosCaducanAntesEnero2024);    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al buscar los medicamentos que caducan antes de enero de 2024.' });
  }
};

module.exports = mostrarMedicamentosCaducanAntesEnero2024;