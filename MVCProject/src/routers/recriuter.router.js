import express from 'express';

import { recruiterLogin,recruiterDashboard,addJob,editJob,deleteJob } from '../controllers/recriuter.controllers.js';



const router= express.Router();

router.get('/login', (req,res)=>{

    res.render('login', {massage :''});
});

router.post('/login', recruiterLogin);

router.get('/dashboard', recruiterDashboard);

router.post('/add-job', addJob);

router.post('/edit-job/:id', editJob);



router.get('/delete-job/:id', deleteJob);



router.get('/logout',(req,res)=>{


    req.session.destroy((err)=>{

        if (err) {
            return res.redirect('recruiter/dashboard');
        };

        res.redirect('/recruiter/login');
    });
});

export default router;



