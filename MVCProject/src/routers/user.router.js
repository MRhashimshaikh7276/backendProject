import express from 'express';


import{ getAllUsers} from '../controllers/user.controllers.js';


const router = express.Router();


router.get('/', getAllUsers);







export default router;








// import express from 'express';
// // import { renderHomePage ,ApplayJob ,FromData,signUp, login} from '../controllers/user.controllers.js';

// const router = express.Router();

// router.get('/', renderHomePage);

// router.get('/jobApplay' ,ApplayJob);

// router.post('/formData',FromData);



// // signUp Router

// router.get('/signup', (req, res) => res.render('signUp')); // Assuming your view file is named 'signUp'


// router.post('/signUp',signUp);

// // login Router //

// router.get('/login',(req,res)=>res.render('login'));

// router.post('/login',login);

// // Dashboard route - Show job list if the user is a job seeker, and post job form for recruiters


// router.get('/dashboard',(req,res)=>{
//    if (req.session.user) {
//     if (req.session.user.role == 'job-seeker') {
//         const jobs = jobs.getJobs();
//         res.render('dashboard', { user: req.session.user, jobs });
//     } else if (req.session.user.role === 'recruiter') {
//         res.render('dashboard', { user: req.session.user, postJobForm: true });
//     } else {
//         res.render('dashboard', { user: req.session.user });
//     }

//    }else {
//         res.redirect('/login'); 
//     }

// })


















// import express from 'express';
// import { registerUser, loginUser, } from '../controllers/user.controllers.js';

// const router = express.Router();
// router.get('/login', (req, res) => res.render('auth/login'));
// router.post('/login', loginUser);
// router.get('/register', (req, res) => res.render('auth/register'));
// router.post('/register', register);
// router.get('/logout', logout);

// export default router;
