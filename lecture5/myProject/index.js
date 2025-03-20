const express = require("express")

const path = require("path");
const port = 5000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:true}));



app.get('/', function (req, res) {
   const contacts = Contact.find({})
   .then(contacts => {
      return res.render('home', {
         title:"home page",
         ContactList:contacts
      })
   })
   .catch(error =>{

      console.log(" error in feactching data from db", error);
      
       return res.status(500).send(' internal server error')

   })
})


app.post('/List', function (req,res) {
   
   const NewContact = Contact.create({

      name:req.body.name,
      contact:req.body.contact
   })

   return res.redirect("back")
  
});


app.get('/DeleteContact', function (req, res) {
   console.log(req.query);
   let name = req.query.name;
   let Delindex = Contact.findIndex((allName) => allName.name == name);

   if (Delindex !== -1) {
      Delindex.splice(Delindex, 1);
       return res.redirect('back');
   } else {
  
       return res.status(404).send('Contact not found');
   }
});













app.listen(port, function(err){

if (err) {
 console.log("error is running the server", err);
   
}
console.log("server is running on port", port);

})