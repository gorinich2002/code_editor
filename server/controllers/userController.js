const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User, Role} = require('../models/models') 
const roles = require('../enums/roles_ids')

const generateJwt = (id, email, role) => {
  console.log(id, email, role)
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class UserController {
    async registration(req, res, next) {
        const { email, password } = req.body;

        if (!email || !password) {
          return next(ApiError.badRequest('Некорренктный email или password'));
        }
    
        const candidate = await User.findOne({ where: { email } }).catch(()=>{});
        if (candidate) {
          return next(
            ApiError.badRequest('Пользователь с таким email уже существует')
          );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        
        console.info('dxxxxxxxzxzzx');
        const user = await User.create({ email, password: hashPassword });
        const token = generateJwt(user.id, user.email, "USER");
        return res.json({ token, role: "USER"});
      }
    
      async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } }).catch(()=>{});
        let role = await Role.findOne({where:{id: user.dataValues.role_id}})
        role = role.dataValues
        if (!user) {
          return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.dataValues.id, user.dataValues.email, role.role_name);
        console.log(token)
        res.cookie('authorization', token)
        console.log(role)
        return res.json({ token, role: role.role_name });
      }
    
      async check(req, res, next) {
        try {
          const { email } = req.body;
          const user = await User.findOne({ where: { email } }).catch(()=>{});
          const role = await Role.findOne({where:{id: user.dataValues.role_id}})
          const token = generateJwt(req.user.id, req.user.email, role.role_name);
          return res.json({ token });
        } catch (error) {
          return res.json({ error });
          
        }

      }

      async getAll(req, res, next) {
    
        const users = await User.findAll({ where: { role_id:  roles.USER} }).catch(()=>{});

        console.info('dxxxxxxxzxzzx');

        return res.json({ users });
      }
}
module.exports = new UserController()