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

  const classes = useStyles();

  return (
    <>
	  <div className='search-container'>
		<TextField id='search-card' label='Search by Keyword' variant='outlined' name='keyword' value={state.keyword} onChange={updateField} />
		<Button className={classes.submit} variant='contained' color='primary'>Submit</Button>
	  </div>
	</>
  )
}

export default Dashboard;
