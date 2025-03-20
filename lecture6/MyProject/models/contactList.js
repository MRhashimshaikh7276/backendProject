

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    name:{
        Type:String,
        required:true
    },

    contact:{
        Type:String,
        required:true
    }
})


const contact = mongoose.model('contact', contactSchema)


module.exports = contact;