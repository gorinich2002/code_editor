const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User} = require('../models/models') 

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class adminControler {
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
        const user = await User.create({ email, password: hashPassword, role: "TEACHER" });
        console.info(user)
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ email });
      }
    
}
module.exports = new adminControler()