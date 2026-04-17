var express = require('express');
var router = express.Router();
const taskController=require('../controllers/taskController');
const asyncHandler = require('../middlewares/asyncHandler');
/* GET users listing. */
router.post('/',asyncHandler(taskController.create))
module.exports = router;
