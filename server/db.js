const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    "postgres", // название БД
    process.env.DB_USER, //Пользователь
    process.env.DB_PASSWORD, //пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }

)