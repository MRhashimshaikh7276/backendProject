






// const express = require('express')
// const router = express.Router();


// router .get('/',function(req,res){
//     res.send ('Home page')
// })

// module.exports = router;











// const express = require('express');

// const router = express.Router();
// const homeController = require('../controllers/home_controllers');


// console.log('router loaded');


// router.get('/', homeController.home);



// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const homeController = require('../controllers/home_controllers');

// console.log('index router loaded');

// router.get('/', homeController.home);

// module.exports = router;







const express = require('express');
const router = express.Router(); 
const homeController = require('../controllers/home_controllers');

console.log('router loaded');

router.get('/', homeController.home);

module.exports = router;
