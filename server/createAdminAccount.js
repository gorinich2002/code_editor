require('dotenv').config()
const bcrypt = require('bcrypt');
const { User } = require('./models/models');
const sequelize = require('./db')

const email = 'admin';
const password = 'admin';

console.info(email);
console.info(password);

(async () => {
    if (!email || !password) {
        console.log('Некорренктный email или password');
    } else {
        console.log('authenticate');
        await sequelize.authenticate()
        console.log('sync');
        await sequelize.sync()
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            console.log('Пользователь с таким email уже существует')
        } else {
            const hashPassword = await bcrypt.hash(password, 5);
            User.create({ email, password: hashPassword, role: 'ADMIN' }).then(console.log);
        }
    }


})()