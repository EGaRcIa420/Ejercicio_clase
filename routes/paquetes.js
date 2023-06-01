const {Routes, Router} = require('express')

const route = Router()

route.get ('/',(req,res)=> {
    res.json({
        msg:'API GET PAQUETES'
    })
})

route.post ('/', (req,res)=> {
    res.json({
        msg:'API POST PAQUETES'
    })
})

route.put ('/', (req,res)=> {
    res.json({
        msg:'API PUT PAQUETES'
    })
})

route.delete ('/', (req,res)=> {
    res.json({
        msg:'API DELETE PAQUETES'
    })
})

module.exports = route
