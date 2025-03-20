
const express = require('express');
const app = express();
const port = 5000;
 const db = require('./config/mongoose');

 const cookieParser = require('cookie-parser')


app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
    
app.use('/',require('./routes'));




app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
