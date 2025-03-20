const express = require("express");
const port = 5000;
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

let studentData = [
  {
    name: "",
    email: "",
    studentCon: "",
    prentCon: "",
    address: "",
    date: "",
    male: "",
    female: "",
  },
];

// app.use(function (req, res, next) {
//   console.log("midilewere 2");
//   next();
// });

app.get("/form", function (req, res) {
  return res.render("form", {
    title: "from",
  });
});

app.get("/home", function (req, res) {
  return res.render("home", {
    title: "submit From",
    fromList: studentData,
  });
});

app.get("/delete-contact", function (req, res) {
  console.log(req.query);
  let name = req.query.name;
  let nameIndex = studentData.findIndex((allName) => allName.name == name);

  if (nameIndex != -1) {
    studentData.splice(nameIndex, 1);
    return res.redirect('back')
  } 
}); 


app.post("/stunentDet", function (req, res) {
  studentData.push(req.body);
  return res.redirect("home");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server", err);
  }
  console.log("yup! My server is running on port", port);
});
