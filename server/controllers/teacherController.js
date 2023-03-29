const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User} = require('../models/models'); 
const roles = require('../enums/roles_ids')


const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class adminControler {
    async getUsers(req, res, next) {
    
     
        const users = await User.findAll({ where: { roleID:  roles.USER} }).catch(()=>{});

        console.info('dxxxxxxxzxzzx');

        return res.json({ users });
      }
    
}
module.exports = new adminControler()