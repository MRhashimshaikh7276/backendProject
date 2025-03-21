import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";

class ProductRepository{

    constructor(){
        this.collection = "products"
    };


    async add(newProduct){
        try{
            // 1. Get the db.
            const db = getDB();
            const collection = db.collection(this.collection);
            await collection.insertOne(newProduct);
            return newProduct
        }catch(err){
            console.log("Something went wrong with database", err);
                
        }
    };

    async getAll(){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            const products = await collection.find().toArray();
            console.log(products);
            return products;
        }catch(err){
            console.log( "Something went wrong with database", err);
                
        }
    };


    async get(id){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            return await collection.findOne({_id: new ObjectId(id)});
        }catch(err){
            console.log("Something went wrong with database",err);
                
        }
    };


    async filter(minPrice, categories){
        try{
            const db = getDB();
            const collection = db.collection(this.collection); 
            let filterExpression={};
            if(minPrice){
                filterExpression.price = {$gte: parseFloat(minPrice)}
            }
            // ['Cat1', 'Cat2']
            categories = JSON.parse(categories.replace(/'/g, '"'));
            console.log(categories);
            if(categories){
                filterExpression={$or:[{category:{$in:categories}} , filterExpression]}
                // filterExpression.category=category
            }
            return collection.find(filterExpression).project({name:1, price:1, _id:0, ratings:{$slice:-1}}).toArray();

        }catch(err){
            console.log("Something went wrong with database",err);
               
        }
    };




        async rate(userID, productID, rating){
        try{
            const db = getDB();
            const collection = db.collection(this.collection); 
            //1. Find the product
            const product = await collection.findOne({_id:new ObjectId(productID)});
            // 2. Find the rating
            const userRating = product?.ratings?.find(r=> r.userID==userID);
           if(userRating){
            // 3. Update the rating
                await collection.updateOne({
                    _id:new ObjectId(productID), "ratings.userID": new ObjectId(userID)
                },{
                    $set:{
                        "ratings.$.rating":rating
                    }
                })
           }else{
            await collection.updateOne({
                _id:new ObjectId(productID)
            },{
                $push:{ratings:{userID:new ObjectId(userID), rating}}
            })
           }
        }catch(err){
            console.log(err);
              
        }
    }
}






export default ProductRepository;