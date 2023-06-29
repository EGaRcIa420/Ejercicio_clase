const { response } = require('express')

//Importar modelos
const Cita = require('../models/cita')


const citaGet = async (req, res = response) => {

    const citas = await Cita.find()

    res.json({
        citas
    })
}

const citaPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    try {
        const cita = new Cita(body)
        await cita.save()
        mensaje = "Exito en la insersion"
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.log(Object.values(error.errors).map(val => val.message))
            mensaje = Object.values(error.errors).map(val => val.message)
        }
    }
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

const citaPut = async (req, res = response) => {
    const { nombreYapellido,telefono,fecha,hora,restrincciones,estado } = req.body//modificar
    let mensaje = ""
    try {
        const cita = await Cita.findOneAndUpdate({ nombreYapellido: nombreYapellido }, {telefono:telefono,fecha: fecha,hora:hora,restrincciones:restrincciones,estado:estado })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado"
    } catch (error) {
        mensaje = "No modificado"
    }
    res.json({
        msg: mensaje
    })
}

const citaDelete = async (req, res = response) => {
    const {_id} = req.query
    let mensaje = " "
    try {
        const cita = await Cita.deleteOne({ _id: _id })
        mensaje = "Eliminado exitosamente"
    } catch (error) {
        mensaje = "No borrado"
    }
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

module.exports = {
    citaGet,
    citaPost,
    citaPut,
    citaDelete
}