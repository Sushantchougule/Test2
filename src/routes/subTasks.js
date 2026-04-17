var express = require('express');
var router = express.Router();
const subTaskController=require('../controllers/subTaskController');
const asyncHandler = require('../middlewares/asyncHandler');
const authenticate = require('../middlewares/authenticate');
/* GET users listing. */
router.post('/',authenticate,asyncHandler(subTaskController.create))
router.put('/:id',authenticate,asyncHandler(subTaskController.update))
module.exports = router;
