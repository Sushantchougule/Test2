var express = require('express');
var router = express.Router();
const taskController=require('../controllers/taskController');
const asyncHandler = require('../middlewares/asyncHandler');
const authenticate = require('../middlewares/authenticate');
/* GET users listing. */
router.post('/',authenticate,asyncHandler(taskController.create))
router.get('/',authenticate,asyncHandler(taskController.findAll))
module.exports = router;
