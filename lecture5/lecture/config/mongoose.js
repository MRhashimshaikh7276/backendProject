const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contactlist');


const db = mongoose.connection;


db.on('error', function (err) {
    console.log(err.message);
});




db.once('open', function () {
    console.log('connected to db');

})