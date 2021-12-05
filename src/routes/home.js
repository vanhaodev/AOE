var express = require('express');
var router = express.Router();
const homeController = require('../app/controllers/homeController');
const loginMiddleware = require('../app/middlewares/users/loginMiddleware');
const registerMiddleware = require('../app/middlewares/users/registerMiddleware');

router.get('/', homeController.home);
router.get('/login', homeController.login);
router.post('/trylogin', loginMiddleware, homeController.trylogin);
router.get('/register', homeController.register);
router.post('/tryregister', registerMiddleware, homeController.tryregister);


module.exports = router;