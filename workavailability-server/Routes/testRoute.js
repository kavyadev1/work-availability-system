const express = require('express');
const router = express.Router();
const testController = require('../Controller/testController');

router.post('/api/test', testController.getTest);

module.exports = router;
