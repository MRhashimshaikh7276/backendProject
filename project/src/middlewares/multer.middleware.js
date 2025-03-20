// Middleware for file upload
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

// Middleware for email sending
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({ /* config */ });

// Email confirmation function
const sendConfirmationEmail = (applicantEmail) => {
    transporter.sendMail({
        to: applicantEmail,
        subject: "Job Application Confirmation",
        text: "Thank you for applying!"
    });
};
