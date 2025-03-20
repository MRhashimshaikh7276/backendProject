import { getJobs, getJobById, createJob, deleteJob } from '../models/job.js';

export const showJobs = (req, res) => {
  const jobs = getJobs(); 
  res.render('jobs/index', { jobs });
};


export const showJob = (req, res) => {
  const job = getJobById(parseInt(req.params.id)); 
  if (!job) {
    return res.status(404).render('404'); 
  }
  res.render('jobs/Show', { job });
};


export const newJob = (req, res) => {
  res.render('jobs/new');
};


export const createJobPost = (req, res) => {
  const jobCreated = createJob(req.body); 
  if (!jobCreated) {
    return res.status(500).send('Error creating job'); 
  }
  res.redirect('/jobs'); 
};


export const deleteJobPost = (req, res) => {
  const jobDeleted = deleteJob(parseInt(req.params.id)); 
  if (!jobDeleted) {
    return res.status(404).send('Job not found or already deleted'); 
  }
  res.redirect('/jobs'); 
};
