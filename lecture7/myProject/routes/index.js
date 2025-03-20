
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controllers')



console.log("router loaded home ");

router.get('/', homeController.home);
router.use('/users', require('./user'))
    

module.exports = router;
