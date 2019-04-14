const items=require('../db').items
const Product=require('../db').Product
const route=require('express').Router()
  route.get('/',async(req,res)=>{
    let allitem=await items.findAll({
      include:[Product],
      where:{id2:req.user.id}
    })
res.send(allitem)
      })
route.post('/',(req,res)=>{

items.create({
 productId:req.body.productId,
 id2:req.user.id
})
})
module.exports={route}