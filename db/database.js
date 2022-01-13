const { Sequelize} = require('sequelize')

const sequelize = new Sequelize('test-db', 'user', 'password',{
dialect: 'sqlite',
host: './m2-db.sqlite'
})

module.exports = sequelize