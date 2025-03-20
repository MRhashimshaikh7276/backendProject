const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/List');


const db = mongoose.connection;


db.on("error", function (err) {
    console.log(err.massage);
    
})


db.once('open', function () {
    console.log("connected to db");
    
})