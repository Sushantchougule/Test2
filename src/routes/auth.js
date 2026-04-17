var express = require('express');
var router = express.Router();
const authController=require('../controllers/authController');
const asyncHandler = require('../middlewares/asyncHandler');
/* GET users listing. */
router.post('/register',asyncHandler(authController.register))
router.post('/login',asyncHandler(authController.login))
module.exports = router;
