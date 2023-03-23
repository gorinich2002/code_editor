const jwt = require('jsonwebtoken')

module.exports = function(checkingRole) {
    return function (req, res, next) {
        console.info('req.cookies',req.cookies)
        const token = req.body.token// Bearer asfasnfkajsfnjk
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log("decoded", decoded);
        if (decoded.role === checkingRole) {
            next()
        }else{
          
            res.status(403).json({message: "Пользователи с вашей ролью не имеют право выполнять данное действие"})
        }
        
    };
}



