import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res) {
        // Log the incoming request body and file for debugging
        console.log('Request Body:', req.body);
        console.log('Uploaded File:', req.file);
    
        const { name, price, sizes, desc } = req.body;
    
        // Check if 'sizes' exists and is a valid string
        if (!sizes || typeof sizes !== 'string') {
            return res.status(400).send('Sizes must be a non-empty comma-separated string.');
        }
    
        // Safely split the 'sizes' string into an array
        const sizeArray = sizes.split(',');
    
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizeArray,
            desc,
            imageUrl: req.file ? req.file.filename : null,  // Handle file if present
        };
    
        console.log('New Product:', newProduct);
    
        // Add the new product to the database or model
        const createdRecord = ProductModel.add(newProduct);
    
        // Send the response back with the created product
        res.status(201).send(createdRecord);
    }
    
    

    rateProduct(req,res){}

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }
    }

}