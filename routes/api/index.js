const route=require('express').Router()

route.use('/products',require('./product'))
//route.use('/users', require('./user'))
module=module.exports={
    route
}