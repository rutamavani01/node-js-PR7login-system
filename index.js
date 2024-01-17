const database = require('./config/db');
const express = require('express');
const port = 8000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());    

const path = require('path');               

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));



const passport = require('passport');
const passportLocal = require('./config/passportLocal');
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


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

app.use('/',require('./routes/registerRoutes'));

app.listen(port,(err)=>{                 
    if(err){                   
        console.log(err);
        return false;      
    }
    console.log(`server listening on ${port}`);
})