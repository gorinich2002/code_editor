const sequelize = require('../db')
const {DataTypes, Sequelize} = require('sequelize')

const User = sequelize.define('user', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role_id: {type:  DataTypes.INTEGER, defaultValue: 2}, // USER ADMIN TEACHER
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})

const Role = sequelize.define('roles', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role_name: {type:  DataTypes.STRING, defaultValue: 'USER'}, // USER ADMIN TEACHER
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})
User.sync();
Role.sync();
module.exports = {
    User,
    Role
}