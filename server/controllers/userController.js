const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User} = require('../models/models') 

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class UserController {
    async registration(req, res, next) {
        const { email, password } = req.body;
        console.info(email);
        console.info(password);
       
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
        console.info(user)
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token, role: user.role });
      }
    
      async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } }).catch(()=>{});
        if (!user) {
          return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        res.cookie('authorization', token)
        return res.json({ token, role: user.role });
      }
    
      async check(req, res, next) {
        const user = await User.findOne({ where: { email } }).catch(()=>{});
        console.log(req.user.id, req.user.email, user.role);
        const token = generateJwt(req.user.id, req.user.email, user.role);
        return res.json({ token });
      }
}
module.exports = new UserController()