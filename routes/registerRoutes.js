const express = require('express');

const routes = express.Router();

const registerControllers = require('../controllers/registerControllers');

const passport = require('passport');

routes.get('/',registerControllers.login);
routes.get('/dashboard',registerControllers.dashboard);
routes.get('/register',registerControllers.register);
routes.post('/registerRecord',registerControllers.registerRecord);
routes.post('/loginUser',registerControllers.loginUser);
routes.get('/profile',registerControllers.profile);
routes.get('/create',registerControllers.create);

module.exports = routes;