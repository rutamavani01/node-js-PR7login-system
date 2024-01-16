const express = require('express');

const routes = express.Router();

// controllers
const registerControllers = require('../controllers/registerControllers');
const userModel = require('../controllers/userControllers');

const passport = require('passport');

// register Routes
routes.get('/',registerControllers.login);
routes.get('/dashboard',registerControllers.dashboard);
routes.get('/register',registerControllers.register);
routes.post('/registerRecord',registerControllers.registerRecord);
routes.post('/loginUser',registerControllers.loginUser);
routes.get('/profile',registerControllers.profile);

// user Routes
routes.get('/create',userModel.create);
routes.post('/addRecord',userModel.addRecord);


module.exports = routes;