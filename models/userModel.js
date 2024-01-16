const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
})

const userModels = mongoose.model('userModel',userSchema);
module.exports = userModels;