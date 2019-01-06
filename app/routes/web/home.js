const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('app/http/controllers/homeController');
const loginController = require('app/http/controllers/auth/loginController');
const registerController = require('app/http/controllers/auth/registerController');


// Middlewares
const redirectIfAuthenticated = require('app/http/middleware/redirectIfAuthenticated');

// validators 
const registerValidator = require('app/http/validators/registerValidator');
const loginValidator = require('app/http/validators/loginValidator');


// Home Routes
router.get('/' , homeController.index);
router.get('/login' , redirectIfAuthenticated.handle , loginController.showLoginForm);
router.post('/login' , redirectIfAuthenticated.handle , loginValidator.handle() ,loginController.loginProccess);

router.get('/register' , redirectIfAuthenticated.handle , registerController.showRegsitrationForm);
router.post('/register' , redirectIfAuthenticated.handle , registerValidator.handle() , registerController.registerProccess);

router.get('/logout' , (req ,res) => {
    req.logout();
    res.clearCookie('remember_token');
    res.redirect('/');
});

module.exports = router;