import ProductModel from "./products.models.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }
    
    addProduct(req, res) {
        try {
            const { name, price, sizes } = req.body;
    
            if (!name || !price || !sizes) {
                return res.status(400).send({ error: 'Missing required fields: name, price, or sizes' });
            }
    
            const newProduct = {
                name,
                price: parseFloat(price),
                sizes: sizes.split(','), // Ensure sizes is a comma-separated string
                imageUrl: req.file ? req.file.filename : null, // Handle missing file gracefully
            };
    
            console.log(newProduct);
    
            const createdRecord = ProductModel.add(newProduct);
            res.status(201).send(createdRecord);
        } catch (error) {
            res.status(500).send({ error: 'An error occurred while adding the product' });
        }
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


    filterProdcuts(req,res){
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const sizes = req.query.sizes;
        const  result = ProductModel.filter(
        minPrice,
        maxPrice,
        category,
         sizes
        );
        res.status(200).send(result);
    }

}