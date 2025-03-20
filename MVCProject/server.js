// index.js
import express from 'express';
import cors from 'cors';
import session from 'express-session'; 
import jobRoutes from './src/routers/job.router.js';
import recruiterRoutes from './src/routers/recriuter.router.js';
import userRoutes from './src/routers/user.router.js';
import multer from 'multer';


const server = express();
// Middleware
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));


 
server.use(session({
  secret: 'your-secret-key', 
  resave: false,              
  saveUninitialized: true,    
  cookie: { secure: false }   
}));


server.set('view engine', 'ejs');
server.set('views', './src/views');

// Routes
server.use('/jobs', jobRoutes);
server.use('/recruiter', recruiterRoutes);
server.use('/users', userRoutes);

// Homepage Route
server.get('/', (req, res) => {
  res.render('index');
  
});


server.get('/recruiter/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to log out');
    }
    res.redirect('/recruiter/login');
  });
});


server.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).send(`Multer error: ${err.message}`);
  } else if (err) {
    res.status(400).send(`Error: ${err.message}`);
  } else {
    next();
  }
});


server.use('/uploads', express.static('uploads'));



server.listen(3001, () => {
    console.log('Server listening on port 3001');
});























// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import session from 'express-session';
// import userRoutes from './src/routers/user.router.js';
// import jobRoutes from './src/routers/job.router.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// // Static files
// app.use(express.static(path.join(__dirname, '../public')));

// // Views
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Routes
// app.use('/', userRoutes);
// app.use('/', jobRoutes);

// // 404 Handler
// app.use((req, res) => res.status(404).render('404'));

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
