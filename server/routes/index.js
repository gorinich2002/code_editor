const Router = require('express')
const ifRole = require('../middleware/ifRole')
const tasksRouter = require('./tasksRouter')
const router = new Router()
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')
const groupsRouter = require('./groupsRouter')


router.use('/user', userRouter)
router.use('/tasks', tasksRouter)
router.use('/teacher',ifRole("ADMIN"), adminRouter)
router.use('/groups',ifRole("TEACHER"), groupsRouter)


router.use('/compiler', require('./compilerRouter')) //compile router registration


module.exports = router