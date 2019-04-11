const items=require('../db').items
const route=require('express').Router()
  route.get('/',async(req,res)=>{
    let allitem=await items.findAll({
      where:{id1:req.user.id}
    })
res.send(allitem)
      })
route.post('/',(req,res)=>{
items.create({
 id:req.body.id,
  id1:req.user.id,
  name:req.body.name,
  price:req.body.price
})
})
module.exports={route}