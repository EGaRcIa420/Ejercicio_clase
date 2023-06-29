const { Schema, model } = require('mongoose');

const PaqueteSchema = Schema({
    paquetes: {
        type: String,
        required: true,
    },

    servicios: {
        type: [String], // Modificado a un array de strings
        required: true,
        // enum: ['Rumba', 'Spa', 'Spinning', 'Maquinas', 'Nutricion', 'Evaluacion', 'Clase', 'Acompañamiento']
    },

    cantidad: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    total:{
        type: Number,
        required: true
    },

    estado: {
        type: Boolean,
        required: true,
        default: true,
    },
});

module.exports = model('Paquete', PaqueteSchema);
