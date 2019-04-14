const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  // when using sqlite
  storage: __dirname + '/tasks.db',

  // for mysql/postgres/mssql
  
})

const Product = db.define('product', {
  name:{
    type:Sequelize.STRING,
    allowNull:true
  },
  manufacturer:{
      type:Sequelize.STRING,
      allowNull:true
  },
  price:{
      type:Sequelize.FLOAT,
      allowNull:false,
      defaultValue:0.0
  }
  
})
const User = db.define('user', {

  username:{
    type:Sequelize.STRING,
    allowNull:true
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  },
  phone:{
      type:Sequelize.NUMBER,
      allowNull:true
  },
  address:{
      type:Sequelize.STRING,
      allowNull:false
  }
  
})
const items = db.define('item',{
  id2:{
    type:Sequelize.INTEGER,
    
  }
})
items.belongsTo(Product)
Product.hasMany(items)
db.sync(()=>
{
  console.log('done...')
})

module.exports = {
  db, Product,User,items
}