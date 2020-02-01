import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SpringGrid } from 'react-stonecutter';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Empty from '../presentation/Empty';


const useStyles = makeStyles({
  submit: {
	display: 'block',
	marginTop: '10px'
  },
});

const Dashboard = () => {
  const [search, setSearch] = useState({});
  const [state, setState] = useState({});
  const [deck, setDeck] = useState([]);

  const updateField = e => {
	setSearch({[e.target.name]: e.target.value});
  };

  const submitHandler = () => {
	console.log('searching');
	axios.post('/api/search/text', { text: search.text })
	  .then( res => setState({ 
		cards: res.data.cards, 
		cardCount: res.data.cardCount
	  }))
	  .catch( err => console.log('Error: ', err));
  };

  const addToDeck = e => {
	console.log(e.currentTarget.dataset.id);
	setDeck([...deck, e.currentTarget.dataset.id])
  }


  const classes = useStyles();

  return (
    <>
	  <div id='search-container'>
		<TextField id='search-card' label='Search for Cards' variant='outlined' name='text' value={search.text} onChange={updateField} />
		<Button className={classes.submit} variant='contained' color='primary' onClick={submitHandler}>Submit</Button>
	  </div>
	  <div id='result-container'>
	    { state.cards ? null : <div id='empty-container'><Empty /></div>}
	    <SpringGrid
		  component="ul"
		  columns={3}
		  columnWidth={375}
		  gutterWidth={5}
		  gutterHeight={5}
		  itemHeight={518}
		  springConfig={{ stiffness: 150, damping: 28 }}
		>
		  {state.cards ? state.cards.map( card => (
			<li key={card.id} data-id={card.id} className='card-container' onClick={addToDeck}>
			  <img src={card.image} />
		 	</li>
		  )) : null
		  }
		</SpringGrid>
	  </div>
	  <div id='deck-container'>
		<h1>My Cards</h1>
	  </div>
	</>
  )
}

export default Dashboard;
