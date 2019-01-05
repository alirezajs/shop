const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('app/http/controllers/homeController');
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');


// Home Routes
router.get('/' , homeController.index);
router.get('/login' , loginController.showLoginForm);
router.post('/login' , loginController.loginProccess);

router.get('/register' , registerController.showRegsitrationForm);
router.post('/register' , registerController.registerProccess);

module.exports = router;