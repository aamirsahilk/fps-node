const express = require('express');
const router = express.Router();
const userRolesController = require('../controller/user/roleController');

// Define routes
router.get('/userroles', userRolesController.getAllUserRoles);
router.post('/userroles', userRolesController.createUserRole);
router.put('/userroles/:id', userRolesController.updateUserRole);
router.delete('/userroles/:id', userRolesController.deleteUserRole);

module.exports = router;
