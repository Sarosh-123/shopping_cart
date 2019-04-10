const route = require('express').Router()
const prod=require('../db').Product
let item=[]
route.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  res.render('cart', {item,user:req.user})
})
route.post('/',(req,res)=>{
  
   item.push({
       id:req.body.id,
       price:req.body.price,
       name:req.body.name
   
     })
    

  res.send(item)
})


module.exports = {
  route
}