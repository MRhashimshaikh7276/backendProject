import { recruiters } from '../models/recriuter.models.js';
import { jobs } from '../models/job.models.js';


export const recruiterLogin = (req, res) => {
  const { username, password } = req.body;
  
  console.log(`Login attempt with username: ${username}, password: ${password}`);
  
 
  const recruiter = recruiters.find(r => r.username === username && r.password === password);
  
  if (recruiter) {
    console.log(`Recruiter found: ${recruiter.username}`);
    req.session.recruiter = recruiter;  
    return res.redirect('/recruiter/dashboard');
  } else {
    console.log('Invalid credentials');
    return res.render('login', { message: 'Invalid credentials' });
  }
};


export const recruiterDashboard = (req, res) => {
  if (!req.session.recruiter) {
    return res.redirect('/recruiter/login');
  }

  
  const recruiterJobs = jobs.filter(job => job.recruiterId === req.session.recruiter.id);

  res.render('recruiterDashboard', { 
    recruiter: req.session.recruiter, 
    jobs: recruiterJobs 
  });
};

// Add job
export const addJob = (req, res) => {
  if (!req.session.recruiter) {
    return res.redirect('/recruiter/login'); // Redirect to login if not logged in
  }

  const { title, company, description, location } = req.body;
  const newJob = {
    id: jobs.length + 1, // New ID for the job
    title,
    company,
    description,
    location,
    recruiterId: req.session.recruiter.id,
    applications: [], // Associate job with the logged-in recruiter
  };
  jobs.push(newJob); 
  res.redirect('/recruiter/dashboard');
};

// Edit job
export const editJob = (req, res) => {
  if (!req.session.recruiter) {
    return res.redirect('/recruiter/login'); // Redirect to login if not logged in
  }

  const jobId = parseInt(req.params.id);
  const { title, Company, description, location } = req.body;
  const job = jobs.find(j => j.id === jobId && j.recruiterId === req.session.recruiter.id); // Check if job belongs to the logged-in recruiter

  if (job) {
    job.title = title;
    job.Company = Company;
    job.description = description;
    job.location = location;
    return res.redirect('/recruiter/dashboard');
  } else {
    return res.status(404).send('Job not found or unauthorized access');
  }
};



// Delete job
export const deleteJob = (req, res) => {
  if (!req.session.recruiter) {
    return res.redirect('/recruiter/login'); // Redirect to login if not logged in
  }

  const jobId = parseInt(req.params.id);
  const index = jobs.findIndex(j => j.id === jobId && j.recruiterId === req.session.recruiter.id); // Ensure job belongs to the logged-in recruiter

  if (index !== -1) {
    jobs.splice(index, 1); // Remove job from the array
    return res.redirect('/recruiter/dashboard');
  } else {
    return res.status(404).send('Job not found or unauthorized access');
  }
};

// Apply for job (with file upload using Multer)
export const applyForJob = (req, res) => {
  if (!req.session.recruiter) {
    return res.redirect('/recruiter/login'); // Redirect to login if not logged in
  }

  const jobId = parseInt(req.params.id);
  const applicant = req.session.applicant; // Assuming applicant details are in session
  const job = jobs.find(j => j.id === jobId);

  if (job) {
    // Handle file upload with Multer
    upload.single('resume')(req, res, (err) => {
      if (err) {
        console.log('Error uploading file:', err);
        return res.status(400).send(err.message);
      }

      const application = {
        applicantName: applicant.name,
        jobId,
        resume: req.file.path, 
      };
      job.applications = job.applications || [];
      job.applications.push(application);
      return res.redirect('/recruiter/dashboard');
    });
  } else {
    return res.status(404).send('Job not found');
  }
};

