const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;