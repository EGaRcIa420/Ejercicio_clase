const {Routes, Router} = require('express')

const route = Router()

//Importar metodos de navegador
const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} =require('../controllers/usuario')

route.get('/', usuarioGet)

route.post('/', usuarioPost)

route.put('/', usuarioPut)

route.delete ('/', usuarioDelete)

module.exports = route
