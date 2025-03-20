
export default class ProductModel{
    constructor(id, name, desc, price, imageUrl, category, sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.sizes = sizes;

    }
    
    static add(product){
      console.log(products);
      
      product.id = products.length + 1;
      products.push(product);
      return product;
    }

    
    static get(id){
      const product = products.find((i)=>i.id == id);
      return product;

    }

    static getAll(){
        return products;
    }


    static filter(minPrice,maxPrice,category,sizes){

 const sizesArray = sizes ? sizes.split(',').map(size => size.trim()) : []; // Parse sizes into an array


      const result = products.filter((product)=>{

        return(

          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice) &&
          (!category || product.category == category) &&
          (sizesArray.length === 0 || sizesArray.some(size => product.sizes.includes(size))) 
          
        )
      })

      return result
    }
} 

let products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      
      'Category1',
      ['M',"S","L"]
     
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      30.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
       'Category2',
      ['XL',"S","L"],
     
    ),
  
  ];