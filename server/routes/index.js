const Router = require('express')
const tasksRouter = require('./tasksRouter')
const router = new Router()
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/tasks', tasksRouter)


router.use('/compiler', require('./compilerRouter')) //compile router registration


module.exports = router