const express = require('express')

const {dbConnection} = require('../database/config')

const cors = require('cors'); //Implementar seguridad

const bodyParser = require('body-parser') //Recibir datos de formularios de html

class Server {
    constructor(){
        this.app = express()
        this.port= process.env.PORT // capturando variable de entorno
        this.serviciosPath = '/api/servicios' // ruta publica
        this.paquetesPath = '/api/paquetes'
        this.usuariosPath = '/api/usuarios'
        this.routes()
        this.middlewares()
        this.conectarDB()
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log (`Escuchando por el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.serviciosPath,require('../routes/servicios'))
        this.app.use(this.paquetesPath,require('../routes/paquetes'))
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    middlewares(){
        this.app.use(express.static(__dirname+"/public"))
        this.app.use(cors())
        this.app.use(bodyParser.json())// for parsing application json
    }

    async conectarDB(){
        await dbConnection() // Esperarla respuesta del servidor
    }
}

module.exports = Server