import { jobs } from "../models/job.models.js";


// Get all jobs
export const getAllJobs =(req,res)=>{

    res.render('jobs', {jobs});

};
export const showApplicationFrom =(req,res)=>{

    const JobId = parseInt(req.params.id);
    const job = jobs.find(j => j.id === JobId);
    if (job) {
        res.render('jobApplicationForm', {job});

    } else {
        res.status(404).send('job not Found');
    }
};

// submit Application

export const submitApplication = (req,res)=>{
    const jobId = parseInt(req.params.id);
    const job = jobs.find( j => j.id === jobId);

    if (job) {
        const {name,address,phone} = req.body;

        // validate required fields
         if (!name ||!address ||!phone) {
            return res.status(400).send('all fields are required');

         }
         const resumePath = req.file ? req.file.path : null;

         if (!resumePath) {
            return res.status(400).send('resume upload failed');

         };

         console.log('application recived', {

            jobId,
            jobTitle :job.title,
            name,
            address,
            phone,
            resumePath,
         });
         res.send('your application has been submitted successfully');
    }else {
        res.status(404).send('jon not Found')
    }
};

// get job detalis

export const getJobDetalis = (req,res)=>{

    const jobId = parseInt(req.params.id);

    const job = jobs.find( j=> j.id === jobId);
    if (job) {
        res.render('jobDetalis', {job});

    } else {
        res.status(404).send('job not Found');

    }
};


// get a specific job (optional remove if redundant)


export const getJob = (req,res)=>{

    const jobId = parseInt(req.params.id);
    const job = jobs.find( j => j.id === jobId);

    if (job) {
        res.render('jobDetail', {job});
    } else {
        res.status(404).send('job not Found');
    }
}





























// import JobModels from '../models/job.models.js';

// export const renderJobsPage = (req, res) => {
//     const jobs = Object.values(JobModels.getAllJobs()); // Fetch jobs
//     res.render('showJobs', {
//         title: 'Jobs Page',
//         content: 'Here are the available jobs.',
//         jobs, // Pass jobs to the view
//     });
// };


// export const getJobList = (req, res) => {
//     const jobs = Object.values(JobModels.getAllJobs());
//     res.render('index', { jobs });
// };


// export const getJobDetails = (req, res) => {
//     const jobId = req.body.id; 
//     const job = JobModels.getJobById(jobId);

//     if (job) {
//         res.render('showjobs', { 
//             title: `Details of Job ${job.title}`,
//             content: 'Job details below:',
//             jobs: [job], 
//         });
//     } else {
//         res.status(404).send('Job not found');
//     }
// };





    // getJobs(req,res, next){
    //       return  res.render('layout',{
    
    //   })
    // }



// import { jobs } from '../models/job.models.js';

// export const getAllJobs = (req, res) => {
//     res.render('job/index', { jobs });
// };

// export const createJob = (req, res) => {
//     const { category, designation, location, companyName, salary, applyBy, skills, openings } = req.body;
//     const newJob = {
//         id: jobs.length + 1,
//         category,
//         designation,
//         location,
//         companyName,
//         salary,
//         applyBy,
//         skills: skills.split(','),
//         openings,
//         applicants: [],
//     };
//     jobs.push(newJob);
//     res.redirect('/jobs');
// };
