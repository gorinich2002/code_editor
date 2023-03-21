const sequelize = require('../db')
const {DataTypes, Sequelize} = require('sequelize')

const User = sequelize.define('user', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type:  DataTypes.STRING, defaultValue: 'USER'}, // USER ADMIN TEACHER
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})

module.exports = {
    User
}