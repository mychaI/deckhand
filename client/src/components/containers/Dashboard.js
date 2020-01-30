import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  submit: {
	display: 'block',
	marginTop: '10px'
  },
});

const Dashboard = () => {
  const [state, setState] = useState({});

  const updateField = e => {
	setState({[e.target.name]: e.target.value});
  };

  const submitHandler = () => {
	console.log('searching');
	axios.post('/api/search/text', { text: state.text })
	  .then( res => setState({ 
		cards: res.data.cards, 
		cardCount: res.data.cardCount
	  }))
	  .then( () => console.log(state.cards))
	  .catch( err => console.log('Error: ', err));
  };

  const classes = useStyles();

  return (
    <>
	  <div className='search-container'>
		<TextField id='search-card' label='Search for Cards' variant='outlined' name='text' value={state.text} onChange={updateField} />
		<Button className={classes.submit} variant='contained' color='primary' onClick={submitHandler}>Submit</Button>
	  </div>
	  <div className='result-container'>
	  </div>
	</>
  )
}

export default Dashboard;
