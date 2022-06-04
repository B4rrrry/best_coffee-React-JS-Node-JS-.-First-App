const Router = require('express');
const router = new Router();
const userController = require('../controllers/usersController');
const AuthMiddleWare = require('../middleware/AuthMiddleWare');

router.post('/registration', userController.registration );
router.post('/login', userController.login);
router.get('/auth', AuthMiddleWare,userController.check );

module.exports = router;