const express = require('express');
const router = express.Router();

const TestController = require('../controllers/test');

router.get('/', TestController.helloWorld);

module.exports = router;