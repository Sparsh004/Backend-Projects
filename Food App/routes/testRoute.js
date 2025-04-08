const express = require('express');
const {testUserController} = require('../controllers/testController');


// router
const router = express.Router();

// routes GET|POST|PUT|DELETE
router.get('/test-user',testUserController);



// export router
module.exports = router;
