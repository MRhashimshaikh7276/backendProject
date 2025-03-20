import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import jobRoutes from './src/routes/jobRoutes.js'; // Ensure this path is correct
import userRoutes from './src/routes/userRoutes.js'; // Make sure to import userRoutes
import { fileURLToPath } from 'url';
import path from 'path';





const app = express();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);       


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({ secret: 'secret_key', resave: false, saveUninitialized: true }));

app.use(express.static('public')); 


app.use('/jobs', jobRoutes);
app.use('/users', userRoutes);


app.listen(2000, () => console.log('Server running on port 2000')); 
