

import express from 'express';
import ProductController from './products.controller.js';
import { upload } from '../../middlewares/fileupload.middleware.js';


const productRouter = express.Router();
const productController = new ProductController()

productRouter.get(
    '/filter',
    productController.filterProdcuts
);
productRouter.get(
    
    '/',
    productController.getAllProducts);

productRouter.post(
    '/',
    upload.single('imageUrl'),
    productController.addProduct);

productRouter.get(
    '/:id',
    productController.getOneProduct)


export default productRouter;
