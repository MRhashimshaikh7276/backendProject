const express = require("express");
const { sendTestEmail } = require("../controller/emailController");

const router = express.Router();

router.post("/send-email", sendTestEmail);

module.exports = router;
