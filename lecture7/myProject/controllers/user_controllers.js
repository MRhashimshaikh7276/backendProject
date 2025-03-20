const User = require("../models/user");
module.exports.profile = async function (req, res) {
  if (req.cookies.user_id) {
    try {
      const user = await User.findById(req.cookies.user_id);

      if (user) {
        return res.render("profile", {
          title: "user profile",
          user: user,
        });
      } else {
        return res.redirect("/users/sign-in");
      }
    } catch (err) {
      console.log("error in finding user profile", err);
      return res.redirect("/users/sign-in");
    }
  } else {
    return res.redirect("/users/sign-in");
  }
};


module.exports.signUp = function (req, res) {
  return res.render("user_signUp",{
    title: "Codeial | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in",{
    title: "Codeial | Sign In",
  });
};

//  get the sign up data
module.exports.create = async function (req, res) {
  if (req.body.password !== req.body.confirm_password) {
    return res.redirect("back");
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.redirect("back");
    }

    const user = await User.create(req.body);
    return res.redirect("/users/user_sign_in");
  } catch (err) {
    console.log("error in finding user in signing up", err);
    return res.redirect("back");
  }
};





module.exports.createSession = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.redirect("back");
    }

    if (user.password !== req.body.password) {
      return res.redirect("back");
    }

    res.cookie("user_id", user.id);
    return res.redirect("users/profile");
  } catch (err) {
    console.log("error in finding user in signing in", err);
    return res.redirect("back");
  }
};

