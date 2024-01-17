const userModels = require('../models/userModel');
const fs = require('fs');

const create = (req, res) => {
    return res.render('create');
}

const addRecord = async (req, res) => {
    try {
        let imagename = '';
        if (req.file) {
            imagename = req.file.path
        }
        let insertData = await userModels.create({
            // name : req.body.name,
            caption: req.body.caption,
            image: imagename
        })
        console.log(insertData);
        return res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
        return false;
    }
}

const dashboard = async (req, res) => {
    // return res.render('dashboard')
    try {
        let viewData = await userModels.find({})
        return res.render('dashboard', {
            record: viewData
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const profile = async(req,res) => {
    // return res.render('profile');
    try {
        let Data  = await userModels.find({})
        return res.render('profile',{
            record  : Data
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteRecord = async (req, res) => {
    try {
        // delete Image
        let deleteFile = await userModels.findById(req.query.deleteId);
        fs.unlinkSync(deleteFile.image);

        let deleteData = await userModels.findByIdAndDelete(req.query.deleteId)
        console.log("record delete!");
        return res.redirect('back')
    } catch (error) {
        console.log(error);
        return false
    }
}

const editRecord = async(req,res)=>{
    try { 
        let editData = await userModels.findById(req.query.editId);
        return res.render('create',{
            single : editData
        })
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateRecord = async(req,res) => {
    if(req.file){
        try {
            let oldImage = await userModels.findById(req.body.editid)
            fs.unlinkSync(oldImage.image);
        } catch (error) {
            console.log(error);
            return false
        }

        try {
            let editData = await userModels.findByIdAndUpdate(req.query.editid,{
                caption : req.query.caption,
                image : req.file.path
            })
            console.log("Data edited successfully");
            return res.redirect('/dashboard');
        } catch (error) {
            console.log(error);
            return false
        }
    }else{
        try {
            let editData = await userModels.findById(req.query.editid)
            let update = await userModels.findByIdAndUpdate(req.body.editid,{
                caption : req.query.caption,
                image : editData.image
            })
            console.log("Data edited!");
            return res.redirect('/dashboard');
        } catch (error) {
         console.log(error);
         return false;   
        }
    }
}

module.exports = {
    create, addRecord, dashboard, deleteRecord , editRecord , updateRecord , profile
}
