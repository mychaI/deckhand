const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');


module.exports = {
  createUser: (req, res, next) => {
	// register a new user
	const { username, password } = req.body;

	const createString = `
	  INSERT INTO users (username, password)
	  VALUES ($1, $2)
	`;

	// hash password
	bcrypt.hash(password, saltRounds, (err, hash) => {
	  if (err) return next(err);
	  // save user in db
	  db.query(createString, [username, hash])
	    .then( data => {
		  res.locals.username = username;
		  return next();
		})
		.catch( err => {
		  console.log('Error registering user: ', err);
		  return next({ err });
		});
	});
  },

  loginUser: (req, res, next) => {
	// log in user
	const { username, password } = req.body;

	const queryString = `
	  SELECT id, username, password
	  FROM users
	  WHERE username = $1
	`;

	db.query(queryString, [username])
	  .then( data => {
		if (data.rows.length === 0) {
		  return res.status(404).json({
			invalid_auth: 'Invalid username or password'
		  });
		}

		const username = data.rows[0].username;
		const hashed_password = data.rows[0].password;

		bcrypt.compare(password, hashed_password, (err, isMatch) => {
		  if (err) return next(err);
		  if (isMatch) {
			console.log('user logged in');
			jwt.sign({username}, keys.secretOrKey, { expiresIn: 900 }, (err, token) => {
			  console.log('signing token', err);
			  if (err) return next(err);
			  res.locals.token = 'Bearer ' + token;
			  return next();
			});
		  } else {
			res.status(403).json({ invalid_auth: 'Invalid username or password' });
		  }
		});
	  })
	  .catch( err => {
		console.log('Error logging in user');
		return next({err});
	  });
  },

};
