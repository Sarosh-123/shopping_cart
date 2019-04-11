const route = require('express').Router()
const prod=require('../db').Product
let item=[]
route.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.render('cart',{user:req.user})
})


module.exports = {
  route
}