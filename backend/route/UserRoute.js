const express = require('express');
const router = express.Router();
const method = require('../controller/UserController');

router.post('/register', method.register);
router.post('/login', method.login);
router.get('/test', method.test);

module.exports = router;
