const { response } = require('express')

//Importar modelos
const Usuario = require('../models/usuario')


const usuarioGet = async (req, res = response) => {

    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })
}

//Registrar
const usuarioPost = async (req, res = response) => {

    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    try {
        const usuario = new Usuario(body)
        usuario.save()
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

//Modificar
const usuarioPut = async (req, res = response) => {
    const { nombre, password, rol, estado } = req.query//modificar

    let mensaje = ""


    try {
        const usuario = await Usuario.findOneAndUpdate({ nombre: nombre }, { rol: rol, estado: estado })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado"
    } catch (error) {
        mensaje = "No modificado"
    }
    res.json({
        msg: mensaje
    })
}

//Eliminar
const usuarioDelete = async (req, res = response) => {
    const { nombre, password, rol, estado } = req.query//modificar

    let mensaje = ""


    try {
        const usuario = await Usuario.findOneAndDelete({ nombre: nombre })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Borrado"
    } catch (error) {
        mensaje = "No borrado"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}