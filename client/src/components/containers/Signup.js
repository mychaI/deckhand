import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  authContainer: {
	gridArea: 'b',
	height: '90%',
	width: '400px',
	margin: 'auto',
	borderRadius: '30px',
	color: 'ghostwhite',
	background:
	`radial-gradient(black 15%, transparent 16%) 0 0,
	radial-gradient(black 15%, transparent 16%) 8px 8px,
	radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
	radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;`,
	backgroundColor:' #282828',
	backgroundSize: '16px 16px'
  },
  authButton: {
	width: '90%',
	margin: '20px'
  },
  authInput: {
	marginBottom: '5px'
  }
});

const Signup = () => {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = e => {
	setUsername(e.target.value);
  };

  const updatePassword = e => {
	setPassword(e.target.value);
  };

  const submitHandler = () => {
	const authObj = {
	  username,
	  password
	}

	axios.post('/users/signup', authObj)
		 .then( res => console.log(res.data))
		 .catch( err => console.log('Error signing up: ', err));
  };

  return (
    <div className={classes.authContainer}>
	  <h1>Sign Up</h1>
	  <TextField id='input-username' label='Username' variant='outlined' name='username' value={username} className={classes.authInput} onChange={updateUsername} />
	  <TextField id='input-password' label='Password' variant='outlined' name='password' value={password} type='password' onChange={updatePassword}
	  />
	  <Button variant='contained' color='primary' onClick={submitHandler} className={classes.authButton}>Sign Up</Button>
	</div>
  )
}

export default Signup;
