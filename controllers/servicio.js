const { response } = require('express')

//Importar modelos
const Servicio = require('../models/servicio')


const servicioGet = async (req, res = response) => {

    const servicios = await Servicio.find()

    res.json({
        servicios
    })
}

const servicioPost = async (req, res = response) => {

    const body = req.body //Captura de atributos
    let mensaje = ''
    console.log(body)
    try {
        const servicio = new Servicio(body)
        await servicio.save()
        mensaje = "Exito en la insersion de los servicios"
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

const servicioPut = async (req, res = response) => {
    const { servicios,clases,precio,estado } = req.body//modificar

    let mensaje = ""

    try {
        const servicio = await Servicio.findOneAndUpdate({ servicios: servicios }, {clases:clases, precio: precio, estado: estado })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado exitosamente los servicios"
    } catch (error) {
        mensaje = "No modificado"
    }
    res.json({
        msg: mensaje
    })
}

const servicioDelete = async (req, res = response) => {
    const {_id} = req.query
    let mensaje = " "
    try {
        const servicio = await Servicio.deleteOne({ _id: _id })
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
    servicioGet,
    servicioPost,
    servicioPut,
    servicioDelete}