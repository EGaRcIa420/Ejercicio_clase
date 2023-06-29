//importar paquetes requeridos de Node
const {response} = require ('express')
//incluir paquete para Encriptar
const bcrypt = require('bcrypt')

//importación de los modelos
const Usuario = require('../models/usuario')
const usuario = require('../models/usuario')

//metodos asincronicos async(req, res)
const usuarioGet = async(req, res = response) =>{
    const{nombre} = req.query //Desestructuracion

    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })

    /* res.json({
        msg: 'GET API',
        nombre: nombre
    }) */
}
//registrar
const usuarioPost = async(req, res = response) =>{
    const body = req.body //catptura de atributos 
    //const {nombre, password, rol, estado} = req.query   
    let mensaje = '' 
    console.log(body)
    try {const usuario = new Usuario(body) // instanciar el objeto

    //encriptar atributo
   // console.log(bcrypt.hashSync(body.password,10))
   //hashsync es un algoritmo de encriptamiento de node
   usuario.password = bcrypt.hashSync(body.password,10)
    await usuario.save()
    mensaje = 'La inserción se efectuó exitosamente'
        
    } catch (error) {
        if (error){
            if (error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)
    }
    res.json({
        msg: mensaje
    })
}
//Modificar
const usuarioPut = async(req, res = response) =>{
    const { nombre, password, rol, estado} = req.body //catptura de atributos 
    let mensaje =''

    try {const hashedPassword = await bcrypt.hash(password, 10);
  
        const usuario = await Usuario.findOneAndUpdate({ nombre: nombre },{password:hashedPassword, rol:rol, estado:estado });
      mensaje = 'La modificación se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la modificación'
    }
    res.json({
        msg: mensaje
    })
}
const usuarioDelete = async(req, res = response) =>{
    const { _id} = req.body //catptura de atributos 
    let mensaje =''

    try {const usuario = await Usuario.deleteOne({_id: _id})
      mensaje = 'La elimicacion se efectuó exitosamente'

    }
    catch (e){
      mensaje = 'Se presentaron problemas en la eliminación'
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