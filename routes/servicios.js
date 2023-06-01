const {Routes, Router} = require('express')

const route = Router()

route.get ('/',(req,res)=> {
    res.json({
        msg:'API GET SERVICIOS'
    })
})

route.post ('/', (req,res)=> {
    res.json({
        msg:'API POST SERVICIOS'
    })
})

route.put ('/', (req,res)=> {
    res.json({
        msg:'API PUT SERVICIOS'
    })
})

route.delete ('/', (req,res)=> {
    res.json({
        msg:'API DELETE SERVICIOS'
    })
})

module.exports = route
