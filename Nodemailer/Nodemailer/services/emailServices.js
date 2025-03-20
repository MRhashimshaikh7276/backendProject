const transporter = require("../config/emailConfig");
const fs = require("fs");
const path = require("path");

const sendEmail = async (to, subject, templateFile, replacements) => {
  try {
    // Read and replace placeholders in template
    let templatePath = path.join(__dirname, "../templates", templateFile);
    let template = fs.readFileSync(templatePath, "utf-8");

    for (let key in replacements) {
      template = template.replace(new RegExp(`{{${key}}}`, "g"), replacements[key]);
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: template,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
    return { success: true, message: `Email sent to ${to}` };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };
