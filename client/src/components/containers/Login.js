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
  }
});

const Login = () => {

  const classes = useStyles();

  const [login, setLogin] = useState({});
  const updateField = e => {
	setLogin({[e.target.name] : e.target.value});
  };
  const submitHandler = () => {
	console.log('Clicked submit');
  };

  return (
    <div className={classes.authContainer}>
	  <h1>Log In</h1>
	  <TextField id='input-username' label='Username' variant='outlined' name='username' value={login.username} onChange={updateField} />
	  <TextField id='input-password' label='Password' variant='outlined' name='password' value={login.password} onChange={updateField}
	  />
	  <Button variant='contained' color='primary' onClick={submitHandler} className={classes.authButton}>Log In</Button>
	</div>
  )
}

export default Login;
