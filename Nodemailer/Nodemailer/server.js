const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// http://localhost:5000/api/email/send-email

// {
//     "email": "yashwebdesign24@gmail.com"cons
//   }