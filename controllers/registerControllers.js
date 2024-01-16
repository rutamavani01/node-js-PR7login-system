const registerModel = require('../models/registerModel');

const login = (req, res) => {
    return res.render('login');

    // if(res.locals.users){
    //     return res.redirect('/dashboard');
    // }
    // return res.render('login');
}

const register = (req, res) => {
    return res.render('register');
}

const registerRecord = async (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        let user = await registerModel.create({
            name, email, password
        })
        // if (!name || !email || !password) {
        //     console.log("All Fiels Are Required");
        //     return false;
        // }

        if (user) {
            console.log("user register");
            return res.redirect('/');
        } else {
            console.log("user not register");
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }

}

const dashboard = (req,res) => {
    return res.render('dashboard');
}

const loginUser = (req,res) => {
    return res.redirect('/dashboard');
}

const profile = (req,res) => {
    return res.render('profile');
}

module.exports = {
    login, register, registerRecord , dashboard , loginUser , profile 
}