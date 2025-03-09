const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const validator = require('../middleware/userValidator');

// Маршруты для работы с пользователями
router.get('/', controller.getAllUsers);       // GET /users
router.get('/:id', controller.getUserById);    // GET /users/:id
router.post('/', validator, controller.createUser);    // POST /users
router.put('/:id', validator, controller.updateUser);  // PUT /users/:id
router.delete('/:id', controller.deleteUser);  // DELETE /users/:id

module.exports = router;