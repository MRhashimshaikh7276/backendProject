import express from 'express';
import ProductsController from './src/controllers/product.controller.js';
import usertController from './src/controllers/user.controller.js'

import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from './src/middlewares/vaildation.middlewere.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middliewere.js';
import { SetLastVisit } from './src/middlewares/lastVisit.middliewere.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(SetLastVisit)

app.use(
    session({
    secret:"secretKey",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

const productsController = new ProductsController();

const UserController = new usertController();


app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views',path.join(path.resolve(), 'src', 'views'));


app.get('/register', UserController.getRegiser);
app.get('/login',UserController.getLogin);
app.post('/login',UserController.postLogin);

app.get('/logout', UserController.logout);


app.post('/register', UserController.postRegister);


app.get('/',auth, productsController.getProducts);

app.get('/add-product',auth, productsController.getAddProduct);
app.get('/update-product/:id',auth, productsController.getUpdateProductView);

app.post('/delete-product/:id',auth, productsController.deleteProduct);

app.post('/',auth, uploadFile.single('imageUrl'), validateRequest, productsController.postAddProduct);

app.post('/update-product',auth, productsController.postUpdateProduct
);

app.listen(2000, () => {
    console.log('Server is running on port 2000');

})


