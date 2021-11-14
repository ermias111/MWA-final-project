const express = require('express');
const router = express.Router();
const { handleLogin, handleRegister } = require('../controller/auth');


router.post('/login', handleLogin)

router.post('/signup', handleRegister)


module.exports = router;