// controllers/userController.js

import { addUser, validateUser } from '../models/user.js';

export const registerUser = (req, res) => {
    addUser(req.body.name, req.body.email, req.body.password);
    res.redirect('/users/login');
};

export const loginUser = (req, res) => {
    
    const user = validateUser(req.body.email, req.body.password);
    if (user) {
        req.session.userId = user.id;
        res.redirect('/jobs');
    } else {
        res.send('Login failed. Please check your email and password.');
    }
};

export const logoutUser = (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
};
