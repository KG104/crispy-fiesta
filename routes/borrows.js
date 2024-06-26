var express = require('express');
var router = express.Router();
var borrowsController = require('../controllers/borrowsController');

router.route('/')
    .get(borrowsController.getAllBorrows)
    .post(borrowsController.addBorrow);

router.route('/:id')
    .get(borrowsController.getBorrow)
    .put(borrowsController.updateBorrow)
    .delete(borrowsController.deleteBorrow);

module.exports = router;