// models/Job.js
const jobs = [];

export const createJob = (jobData) => {
    const job = { id: Date.now(), ...jobData, applicants: [] };
    jobs.push(job);
    return job;
};



export const getJobById = (id) => jobs.find(job => job.id === id);

export const updateJob = (id, updatedData) => {
    const job = getJobById(id);
    if (job) {
        for (let key in updatedData) {
            if (updatedData.hasOwnProperty(key)) {
                job[key] = updatedData[key];
            }
        }
    }
};

export const deleteJob = (id) => {
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) jobs.splice(index, 1);
};





export const getJobs = () => jobs;