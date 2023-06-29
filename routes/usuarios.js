const {Router} = require('express')

const route = Router() 

const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuario')
const {isAuthenticated} = require('../controllers/auth')

route.get('/', isAuthenticated, usuarioGet)  

route.post('/', usuarioPost)

route.put('/', usuarioPut)

route.delete('/', usuarioDelete)

module.exports = route