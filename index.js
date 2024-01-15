const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');

const database = require('./config/db');

app.use('/',require('./routes/registerRoutes'));

const path = require('path');

app.use('/public',express.static(path.join(__dirname, 'public')));

const passport = require('passport');
const passportLocal = require('passport-local');
const session = require('express-session');

app.use(session({
    name : 'instagram',
    secret :'app',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 24 * 60 * 60 * 1000
    }
}))

app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.setUser);

app.listen(port,(err)=>{                 
    if(err){                   
        console.log(err);
        return false;      
    }
    console.log(`server listening on ${port}`);
})