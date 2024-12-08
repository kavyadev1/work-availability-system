const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.get('/api/v1/auth/users', authController.getUsersList());
router.post('/api/v1/auth/login', authController.loginHandler);
router.post('/api/v1/auth/signup', authController.signupv2);

module.exports = router;
