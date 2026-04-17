var express = require('express');
var router = express.Router();
const subTaskController=require('../controllers/subTaskController');
const asyncHandler = require('../middlewares/asyncHandler');
/* GET users listing. */
router.post('/',asyncHandler(subTaskController.create))
router.put('/:id',asyncHandler(subTaskController.update))
module.exports = router;
