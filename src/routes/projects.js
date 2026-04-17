var express = require('express');
var router = express.Router();
const projectController=require('../controllers/projectController');
const asyncHandler = require('../middlewares/asyncHandler');
const authenticate = require('../middlewares/authenticate');
/* GET users listing. */
router.post('/',authenticate,asyncHandler(projectController.create))
router.get('/',authenticate,asyncHandler(projectController.findAll))
router.put('/:id',authenticate,asyncHandler(projectController.update))
module.exports = router;
