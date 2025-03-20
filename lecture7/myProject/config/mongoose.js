


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/development');


const db = mongoose.connection;

db.on('error', console.error.bind(console," error connection to mongoDB"));



db.once('open', function(){
    console.log('connected to database : mongDb');
    
})


module.exports = db