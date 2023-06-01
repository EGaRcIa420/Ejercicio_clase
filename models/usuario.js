const {Schema, model} = require ('mongoose')

const UsuarioSchema = Schema ({
    nombre:{ 
        unique: [true,'El nombre: {VALUE} ya existe'],
        type: String,
        required: [true, 'El campo nombre es requerido']
    },

    password: {
        type: String,
        required: [true, 'El password es requerido'],
        minlength: [3, 'Debe tener minimo 3 caracteres'],
        maxlength: [7, 'Debe tener máximo 7 caracteres']
    },

    rol:{
        type: String,
        required: true,
        enum:['Admin', 'Empleado']
    },

    estado: {
        type: Boolean,
        required: [true,'El estado es obligatorio'],
        default: true
    }
})

module.exports= model('Usuario', UsuarioSchema) //Exportar el modelo