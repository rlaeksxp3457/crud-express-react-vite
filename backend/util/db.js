const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('database_development', "root", "root", {
	dialect: "mysql",
	host: "localhost"
})


module.exports = sequelize