const router = require('express').Router();
const axios = require('axios');
const { client_id, client_secret } = require('../config/keys');

router.post('/token/', (req, res) => {
  const Authentication = {
	username: client_id,
	password: client_secret,
  };

  axios({
	url: 'https://us.battle.net/oauth/token', 
	method: 'POST', 
	data: 'grant_type=client_credentials',
	auth: Authentication,
	headers: {
	  Accept: 'application/json',
	  'Content-Type': 'application/x-www-form-urlencoded'
	}})
  	.then( response => {
	  console.log(response);
	  res.json(response.data);
	})
	.catch( err=> console.log('Error: ', err));

});

module.exports = router;
