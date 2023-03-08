const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/all',  tasksController.getTaskList);



module.exports = router;
