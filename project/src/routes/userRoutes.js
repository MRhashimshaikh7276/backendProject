import express from 'express';
import { registerUser, loginUser, logoutUser, } from '../controllers/user.contollers.js';


const router = express.Router();

// Route to show the registration form


// Route to handle registration form submission
router.post('/register', registerUser);

// Route to show the login form


// Route to handle login form submission
router.post('/login', loginUser);

// Route to handle user logout
router.get('/logout', logoutUser);

export default router;
