import express from 'express';

import { getJob,getAllJobs,getJobDetalis,showApplicationFrom,submitApplication } from '../controllers/job.controllers.js';
import upload from '../middlewares/upload.js';


const router = express.Router();

router.get('/', getAllJobs);


router.get('/apply/:id', showApplicationFrom);

router.post('/apply/:id',upload.single('resume'), submitApplication)



router.get('/:id', getJobDetalis);

router.get('/:id', getJob);

export default router;












// import express from 'express';
// import { renderJobsPage, getJobDetails, getJobList } from '../controllers/job.controllers.js';

// const router = express.Router();

// // Route to render jobs page
// router.get('/jobs', renderJobsPage);

// // Route to fetch job details
// router.post('/jobs', getJobDetails);

// export default router;







// import express from 'express';
// import {
//     listJobs,
//     jobDetails,
//     createJobForm,
//     createJobPost,
// } from '../controllers/job.controllers.js';

// const router = express.Router();
// router.get('/jobs', listJobs);
// router.get('/jobs/:id', jobDetails);
// router.get('/jobs/new', createJobForm);
// router.post('/jobs', createJobPost);

// export default router;
