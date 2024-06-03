var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.addUser);

router.route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router;
