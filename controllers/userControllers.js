const userModels = require('../models/userModel');

const create = (req,res) => {
    return res.render('create');
}

const addRecord= async(req,res) => {
    try {
        let insertData = await userModels.create({
            name : req.body.name,
            caption : req.body.caption
        })
        return res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
        return false;
    }
}


module.exports = {
    create , addRecord
}
