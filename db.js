const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  // when using sqlite
  storage: __dirname + '/tasks.db',

  // for mysql/postgres/mssql
  
})

const Product = db.define('product', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
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

  id: {
    type: Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
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
const items = db.define('item', {

  id: {
    type: Sequelize.INTEGER,
    primaryKey:true
  }
  /*name:{
    type:Sequelize.STRING,
    allowNull:true
  },
  price:{
    type:Sequelize.NUMBER,
    allowNull:true
  }*/
})
db.sync(()=>
{
  console.log('done...')
})

module.exports = {
  db, Product,User,items
}