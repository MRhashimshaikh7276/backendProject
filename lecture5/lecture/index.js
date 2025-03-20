const express = require('express');
const path = require('path');
const port = 7000;

const db = require('./config/mongoose');
const Contact = require('./models/contactlist');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));







app.get('/', function (req, res) {
    const contacts = Contact.find({})
        .then(contacts => {
            return res.render('home', {

                title: 'Home Page',
                contactlist: contacts
            });
        })
        .catch(error => {
            console.log('error in feactching data from db:', error);
            return res.status(500).send("internal Server error")
        })
});




app.post('/ConactList', function (req, res) {
    const newContact = Contact.create({
        name: req.body.name,
        contact: req.body.contact
    })
    // console.log(newContact)
    return res.redirect('back');
});










// port setup
app.listen(port, function (err) {
    if (err) {
        console.log("Error in running ther server", err);
        return;
    }
    console.log('server is running on port:', port);

})