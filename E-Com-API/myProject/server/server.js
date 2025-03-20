
import express from 'express';

// import bodyParser from 'body-parser';

import productRouter from './src/features/prodcuts/products.routes.js';
import userRouter from './src/features/user/user.routes.js';
// import jwtauth from './src/middlewares/besicAuth.middleware.js';
import basicAuth from './src/middlewares/besicAuth.middleware.js';


const server = express();


server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use("/api/products", productRouter);

server.use('/api/users', userRouter); 

server.get('/', (req, res)=>{

    res.send("Welcome to Ecommerce APIs");        
    
});


server.listen(3200,()=>{
    console.log("Server is running at 3200");
});


