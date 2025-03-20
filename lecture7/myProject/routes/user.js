const express = require('express');
const router = express.Router();

const usersController = require("../controllers/user_controllers");



console.log("router loaded user");


router.get('/profile', usersController.profile)

router.get('/sign-Up', usersController.signUp);
router.get('/sign-In', usersController.signIn);


router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession)



module.exports = router;
