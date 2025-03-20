







// const express = require('express');
// const router = express.Router();

// const userController = require('../controllers/user_controllers');


// router.get('/user', userController.user)






const express = require('express');
const router = express.Router();

console.log('user router loaded');

router.get('/', (req, res) => {
    res.send('User Page');
});

module.exports = router;
