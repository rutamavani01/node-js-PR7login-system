const express = require('express');

const routes = express.Router();
const passport = require('passport');

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const imageupload = multer({ storage: storage }).single('image');


// controllers
const registerControllers = require('../controllers/registerControllers');
const userModel = require('../controllers/userControllers');

// register Routes
routes.get('/',registerControllers.login);
// routes.get('/dashboard',registerControllers.dashboard);
routes.get('/register',registerControllers.register);
routes.post('/registerRecord',registerControllers.registerRecord);
routes.post('/loginUser',passport.authenticate('local',{failureRedirect : '/'}),registerControllers.loginUser);
routes.get('/logout',registerControllers.logout);

// user Routes
routes.get('/create',userModel.create);
routes.get('/profile',userModel.profile);
routes.post('/addRecord',imageupload,userModel.addRecord);
routes.get('/dashboard',passport.checkUser,userModel.dashboard);
routes.get('/deleteRecord',userModel.deleteRecord)
routes.get('/editRecord',imageupload,userModel.editRecord)
routes.post('/updateRecord',imageupload,userModel.updateRecord)

module.exports = routes;