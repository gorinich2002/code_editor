const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')


router.use('/user', userRouter)


router.use('/compiler', require('./compilerRouter')) //compile router registration


module.exports = router