const { sendEmail } = require("../services/emailServices");

const sendTestEmail = async (req, res) => {
  const { email } = req.body;

  const response = await sendEmail(email, "Welcome!", "welcomeTemplate.html", {
    name: "User",
    support_email: "hashimshaikh7276@gmail.com",
  });

  if (response.success) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response);
  }
};

module.exports = { sendTestEmail };
