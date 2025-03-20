const express = require('express');
const app = express();
const port = 8000;


// route setup
app.use('/', require('./routes'));






app.listen(port, function (err) {
    if (err) {
        console.log('error in server', err);
    }
    console.log(`server is running on: ${port}`);
})