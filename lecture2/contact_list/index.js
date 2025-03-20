const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
    return res.render('home', {title:"my contact list"});
});
app.get('/practice', function(req, res){

    return res.render('practice', {
        title : "practice file running"
    } );
})





app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', err);
    }
    console.log('Server is running on port:', port);
});