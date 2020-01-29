const router = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const { client_id, client_secret } = require('../config/keys');

router.post('/search/', (req, res) => {
  const keyword = req.body.keyword;
  const Authentication = {
	username: client_id,
	password: client_secret,
  };

  axios({
	url: 'https://us.battle.net/oauth/token', 
	method: 'POST', 
	data: { grant_type: 'client_credentials' },
	auth: Authentication,
	headers: {
	  Accept: 'application/json',
	  'Content-Type': 'application/x-www-form-urlencoded'
	}})
  	.then( res => console.log(res) )
	.catch( err=> console.log('Error: ', err));

  res.json({
	keyword
  });
});

module.exports = router;
