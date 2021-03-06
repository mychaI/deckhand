const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');


/* 
  @route  POST /register
  @descr  Register a new user
  @access Public
*/

router.post('/signup', authController.createUser, (req, res) => {
  res.json({
	confirmation: 'successfully registered',
	username: res.locals.username
  });
});

/* 
  @route  POST /login
  @descr  Log in an existing user
  @access Public
*/
router.post('/login', authController.loginUser, (req, res) => {
  res.json({
	confirmation: 'successfully logged in',
	token: res.locals.token
  });
});

module.exports = router;
