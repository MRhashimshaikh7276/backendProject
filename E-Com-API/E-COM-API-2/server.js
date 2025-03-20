
import express from 'express';
import productRouter from './src/features/product/product.routes.js';

import dotenv from "dotenv";
dotenv.config();

console.log("Loaded PORT:", process.env.PORT); 

const server = express();


server.use("/api/products", productRouter);

server.get('/', (req, res) => {
    res.send("Welcome to Ecommerce APIs");
});


server.listen(process.env.PORT,() => {
    console.log("Server is running at", process.env.PORT);
});
