const router = require('express').Router();
const axios = require('axios');
const { client_id, client_secret } = require('../config/keys');

let token;
let region = 'us';
const base_url = `https://${region}.api.blizzard.com/hearthstone/cards?locale=en_US`;

router.post('/token/', (req, res) => {
  if (!token) {
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
		token = response.data;
		console.log(token);
		res.json({
		  confirmation: 'token received'
		});
	  })
	  .catch( err=> console.log('Error: ', err));
  } else {
	res.json({ 
	  confirmation: 'ready to accept requests'
	});
  }

});

router.post('/search/text', (req,res) => {
  const text = encodeURIComponent(req.body.text.trim());
  console.log('text', text);
  if (!token) {
	axios.post('http://localhost:5000/api/token')
	  .then( response => { console.log('token saved') })
	  .then( () => {
			let request = base_url+'&textFilter='+text+'&access_token='+token.access_token;
			console.log(request);
			axios.get(request)
			  .then( data => res.json(data.data))
			  .catch( err => console.log('Error: ', err));
	  })
	  .catch( err => console.log('Error: ', err));
  } else {
	console.log('firing');
	let request = base_url+'&textFilter='+text+'&access_token='+token.access_token;
	console.log(request);
	axios.get(request)
	  .then( data => res.json(data.data))
	  .catch( err => console.log('Error: ', err));
  }

});


router.post('/search/keyword', (req,res) => {
  const keyword = req.body.keyword;
  if (!token) {
	axios.post('http://localhost:5000/api/token')
	  .then( response => { console.log('token saved') })
	  .then( () => {
			let request = base_url+'&keyword='+keyword+'&access_token='+token.access_token;
			console.log(request);
			axios.get(request)
			  .then( data => res.json(data.data))
			  .catch( err => console.log('Error: ', err));
	  })
	  .catch( err => console.log('Error: ', err));
  } else {
	console.log('firing');
	let request = base_url+'&keyword='+keyword+'&access_token='+token.access_token;
	console.log(request);
	axios.get(request)
	  .then( data => res.json(data.data))
	  .catch( err => console.log('Error: ', err));
  }

});

module.exports = router;
