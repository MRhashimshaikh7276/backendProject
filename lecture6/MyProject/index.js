
const express = require('express');
const port = 4000;
const app = express();


const db = require('./config/mongoose')
const contact = require('./models/contactList')

app.use('/', require('./routes/index'));    
app.use('/user', require('./routes/user'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));















app.listen(port, (err) => {
    if (err) {
        console.log("Error in server:", err);
    }
    console.log("Server is running on port", port);
});




// const express = require('express')
//   const port = 5000
//   const app = express();
// app.use('/', require('./routes/index'));
// app.use('/user',require('./routes/user') )
// app.set('view engine', 'ejs');
// app.set('views', './views');

//   app.listen(port, function (err) {
//       if (err) {
//         console.log("error is server",err);
        
//       }
//       console.log("server is running on", port);
      
//   })



