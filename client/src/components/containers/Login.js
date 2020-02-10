import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Login = () => {

  const [login, setLogin] = useState({});
  const updateField = e => {
	setLogin({[e.target.name] : e.target.value});
  };
  const submitHandler = () => {
	console.log('Clicked submit');
  };

  return (
    <div>
	  <h1>Log in to save and view previous decks</h1>
	  <TextField id='input-username' label='Username' variant='outlined' name='username' value={login.username} onChange={updateField} />
	  <TextField id='input-password' label='Password' variant='outlined' name='password' value={login.password} onChange={updateField}
	  />
	  <Button variant='contained' color='primary' onClick={submitHandler}>Log In</Button>
	</div>
  )
}

export default Login;
