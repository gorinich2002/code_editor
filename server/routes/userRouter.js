const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const ifRole = require('../middleware/ifRole');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware,  userController.check);
router.get('/all', userController.getAll);



module.exports = router;
