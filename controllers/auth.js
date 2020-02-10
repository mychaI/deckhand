const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

  }

};
