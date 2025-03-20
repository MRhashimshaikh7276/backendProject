export default class ProductModel {
    constructor(id, name, desc, Price, imageUrl) {
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.Price = Price;
      this.imageUrl = imageUrl;
    }
  
    static getAll() {
      return products;
    }
  
    static update(productObj) {
      const index = products.findIndex(
        (p) => p.id == productObj.id
      );
      products[index] = productObj;
    }
  
    static delete(id) {
      const index = products.findIndex(
        (p) => p.id == id
      );
      products.splice(index, 1);
    }
  
    static add(name, desc, Price, imageUrl) {
      let newProduct = new ProductModel(
        products.length + 1,
        name,
        desc,
        Price,
        imageUrl
      );
      products.push(newProduct);
    }
  
    static getById(id) {
      return products.find((p) => p.id == id);
    }

  }
  
let products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 10',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    )
  ];
  