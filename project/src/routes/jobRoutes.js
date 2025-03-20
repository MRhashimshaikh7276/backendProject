import express from 'express';
import {
    showJobs,
    showJob,
    newJob,
    createJobPost,
    deleteJobPost
  } from '../controllers/job.controllers.js';
  
const router = express.Router();


router.get('/', showJobs);


router.get('/new', newJob);

router.post('/', createJobPost);


router.get('/:id', showJob);


router.post('/:id/delete', deleteJobPost);

export default router;
