const User=require('../db').User
const route=require('express').Router()

route.get('/', (req, res) => {
    res.render('add_users')
  })
route.post('/',(req,res)=>{
    User.create({
        username:req.body.username,
        password:req.body.password,
        phone:req.body.phone,
        address:req.body.address
    }).then((user) => {
            res.redirect('/login')
          }).catch((err) => {
            throw err
          })
        })
module.exports={
    route
}