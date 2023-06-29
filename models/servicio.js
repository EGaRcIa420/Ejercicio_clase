const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
  servicios: {
    type: String,
    required: true,
  },
  
  clases: {
    type: String,
    required: true,
    enum: ['Maquina, Clases, Spinning', 'Spa, Nutricion, Clases, Maquinas', 'Maquinas, Rumba, Spa, Clases',
      'Nutricion, Clases, Maquinas','Acompañamiento, Rumba, Spinning, Maquinas','Acompañamiento, Nutricion, Evaluacion, Maquinas, Clases']
  },
  
  precio: {
    type: Number,
    required: true,
    min: 6000,
    max: 1000000
  },
  estado: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = model('Servicio', ServicioSchema);
