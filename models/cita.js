const { Schema, model } = require('mongoose');

const CitaSchema = Schema({
    nombreYapellido: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: [true, 'El nombre ya existe']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono es requerido'],
        minlength: [7, 'Debe tener al menos 7 caracteres'],
        maxlength: [10, 'Debe tener como máximo 10 caracteres']
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es requerida'],
        get: function (value) {
          return value.toISOString().split('T')[0]; // Obtener solo la parte de la fecha en formato ISO
        },
      },
    hora: {
        type: String,
        required: [true, 'La hora es requerida'],
        minlength: [5, 'Debe tener el formato HH:MM'],
        maxlength: [5, 'Debe tener el formato HH:MM']
    },
    restrincciones: {
        type: String,
        required: [true, 'Las restricciones son requeridas']
    },
    estado: {
        type: String,
        required: true,
        enum:['Asistio','Pendiente','Cancelo']
    }
});

module.exports = model('Cita', CitaSchema);
